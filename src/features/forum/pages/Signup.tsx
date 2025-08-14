import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from "lucide-react";
import { supabase } from "../../../lib/supabase";

const signupSchema = z
  .object({
    invitationCode: z
      .string()
      .min(1, "Le code d'invitation est requis")
      .regex(
        /^CLUB-[A-Z0-9]{8}$/,
        "Format de code d'invitation invalide (CLUB-XXXXXXXX)"
      ),
    username: z
      .string()
      .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères")
      .max(20, "Le nom d'utilisateur ne peut pas dépasser 20 caractères")
      .regex(
        /^[a-zA-Z0-9_-]+$/,
        "Le nom d'utilisateur ne peut contenir que des lettres, chiffres, tirets et underscores"
      ),
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z
      .string()
      .min(8, "Le mot de passe doit contenir au moins 8 caractères")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre"
      ),
    confirmPassword: z.string(),
    acceptTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "Vous devez accepter les conditions d'utilisation"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

type SignupForm = z.infer<typeof signupSchema>;

export function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const from = location.state?.from?.pathname || "/forum";

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      setIsLoading(true);
      setError(null);

      // Valider le code d'invitation en premier
      const { data: isValidCode, error: validationError } = await supabase.rpc(
        "validate_invitation_code",
        {
          invitation_code: data.invitationCode,
          user_email: data.email,
        }
      );

      if (validationError || !isValidCode) {
        setError("Code d'invitation invalide ou expiré");
        return;
      }

      // Check if username is already taken
      const { data: existingUser } = await supabase
        .from("profiles")
        .select("username")
        .eq("username", data.username)
        .single();

      if (existingUser) {
        setError("Ce nom d'utilisateur est déjà pris");
        return;
      }

      // Create account
      const { data: authData, error: signUpError } = await supabase.auth.signUp(
        {
          email: data.email,
          password: data.password,
          options: {
            data: {
              username: data.username,
              display_name: data.username,
              invitation_code: data.invitationCode, // Stocker le code pour le traitement ultérieur
            },
          },
        }
      );

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (authData.user && !authData.session) {
        // Email confirmation required
        setSuccess(true);
      } else {
        // Auto sign-in successful
        navigate(from, { replace: true });
      }
    } catch (err) {
      setError("Une erreur inattendue est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="hero-card py-8 px-4 sm:px-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold gradient-text mb-4">
                Vérifiez votre email
              </h2>
              <p className="text-gray-300 mb-6">
                Nous avons envoyé un lien de confirmation à votre adresse email.
                Cliquez sur le lien pour activer votre compte.
              </p>
              <div className="space-y-3">
                <Link
                  to="/forum/auth/login"
                  className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-400 to-red-800 hover:from-rose-500 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 shadow-lg shadow-red-500/25"
                >
                  Aller à la connexion
                </Link>
                <Link
                  to="/forum"
                  className="block text-sm text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Retour au forum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/25">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold gradient-text">
          Créer un compte
        </h2>
        <p className="mt-2 text-center text-sm text-gray-300">
          Ou{" "}
          <Link
            to="/forum/auth/login"
            state={{ from: location.state?.from }}
            className="font-medium text-red-400 hover:text-red-300 transition-colors"
          >
            connectez-vous à votre compte existant
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="hero-card py-8 px-4 sm:px-10">
          {/* Error Message */}
          {error && (
            <div className="mb-6 bg-red-900/30 border border-red-500/50 rounded-md p-4 backdrop-blur-sm">
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Invitation Code */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Code d'invitation
              </label>
              <div className="relative">
                <UserPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  {...register("invitationCode")}
                  placeholder="CLUB-XXXXXXXX"
                  className="block w-full pl-10 pr-3 py-2 border border-red-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black/50 text-gray-100 placeholder-gray-400 backdrop-blur-sm font-mono"
                />
              </div>
              {errors.invitationCode && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.invitationCode.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Code fourni par un membre du bureau du club
              </p>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Nom d'utilisateur
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  {...register("username")}
                  placeholder="nom_utilisateur"
                  className="block w-full pl-10 pr-3 py-2 border border-red-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black/50 text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.username.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Utilisé pour vous identifier sur le forum
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  {...register("email")}
                  placeholder="votre@email.com"
                  className="block w-full pl-10 pr-3 py-2 border border-red-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black/50 text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Utilisez votre email personnel ou votre IDUL (@ulaval.ca)
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-2 border border-red-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black/50 text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Au moins 8 caractères avec majuscule, minuscule et chiffre
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-1">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                  placeholder="••••••••"
                  className="block w-full pl-10 pr-10 py-2 border border-red-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-black/50 text-gray-100 placeholder-gray-400 backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div>
              <div className="flex items-start">
                <input
                  id="accept-terms"
                  type="checkbox"
                  {...register("acceptTerms")}
                  className="h-4 w-4 text-red-500 focus:ring-red-500 border-red-500/30 rounded bg-black/50 mt-1"
                />
                <label
                  htmlFor="accept-terms"
                  className="ml-2 block text-sm text-gray-200"
                >
                  J'accepte les{" "}
                  <Link
                    to="/terms"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link
                    to="/privacy"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    politique de confidentialité
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.acceptTerms.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isValid || isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-400 to-red-800 hover:from-rose-500 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-red-500/25"
            >
              {isLoading ? "Création du compte..." : "Créer mon compte"}
            </button>
          </form>

          {/* Back to Forum */}
          <div className="mt-6 text-center">
            <Link
              to="/forum"
              className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              ← Retour au forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
