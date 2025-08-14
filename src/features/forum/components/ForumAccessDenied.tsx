import { useAuth } from "../hooks/useAuth";

export function ForumAccessDenied() {
  const { user, profile } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h2 className="mt-6 text-3xl font-bold gradient-text">
              Forum du Club IA
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Accès restreint aux membres du bureau
            </p>
          </div>
          <div className="hero-card">
            <p className="text-gray-300 mb-4">
              Ce forum est privé et réservé aux membres du bureau du Club
              d'Intelligence Artificielle de l'Université Laval.
            </p>
            <p className="text-sm text-gray-400">
              Contactez un membre du bureau pour plus d'informations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (
    !["développeur", "président", "leader", "responsable"].includes(
      profile?.role || ""
    )
  ) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h2 className="mt-6 text-3xl font-bold gradient-text">
              Accès non autorisé
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Bonjour {profile?.display_name || profile?.username}
            </p>
          </div>
          <div className="hero-card">
            <p className="text-gray-300 mb-4">
              Votre compte ({profile?.role}) n'a pas les permissions nécessaires
              pour accéder au forum.
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Seuls les membres du bureau du club peuvent accéder à cette
              section.
            </p>
            <button
              onClick={() => window.history.back()}
              className="w-full bg-gradient-to-r from-rose-400 to-red-800 text-white py-2 px-4 rounded-lg hover:from-rose-500 hover:to-red-900 transition-all duration-200"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
