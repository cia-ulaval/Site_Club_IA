import { useState } from "react";
import { useAuth } from "../hooks";
import { supabase } from "../../../lib/supabase";

export function InvitationManager() {
  const { profile } = useAuth();
  const [email, setEmail] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [invitations, setInvitations] = useState<any[]>([]);

  // Générer un code d'invitation
  const generateCode = async () => {
    if (!email) {
      alert("Veuillez entrer un email");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.rpc("generate_invitation_code", {
        target_email: email,
      });

      if (error) throw error;

      setGeneratedCode(data);
      setEmail("");
      await loadInvitations();
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur lors de la génération du code");
    } finally {
      setLoading(false);
    }
  };

  // Charger la liste des invitations
  const loadInvitations = async () => {
    const { data, error } = await supabase
      .from("invitation_codes")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setInvitations(data);
    }
  };

  if (
    !["développeur", "président", "leader", "responsable"].includes(
      profile?.role || ""
    )
  ) {
    return <div>Accès réservé aux membres du bureau</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Gestion des invitations</h3>

      {/* Génération de code */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Email du nouveau membre du bureau :
        </label>
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="membre@ulaval.ca"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={generateCode}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Génération..." : "Générer le code"}
          </button>
        </div>
      </div>

      {/* Code généré */}
      {generatedCode && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">
            Code d'invitation généré :
          </h4>
          <div className="font-mono text-lg bg-white p-2 rounded border">
            {generatedCode}
          </div>
          <p className="text-sm text-green-700 mt-2">
            Partagez ce code avec le nouveau membre du bureau. Il expire dans 7
            jours.
          </p>
        </div>
      )}

      {/* Liste des invitations */}
      <div>
        <h4 className="font-semibold mb-3">Codes d'invitation actifs :</h4>
        <button
          onClick={loadInvitations}
          className="mb-3 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
        >
          Actualiser
        </button>

        <div className="space-y-2">
          {invitations.map((invitation) => (
            <div
              key={invitation.id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded"
            >
              <div>
                <span className="font-mono">{invitation.code}</span>
                {invitation.email && (
                  <span className="ml-2 text-sm text-gray-600">
                    ({invitation.email})
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-500">
                {invitation.is_used ? (
                  <span className="text-green-600">✓ Utilisé</span>
                ) : (
                  <span>
                    Expire le{" "}
                    {new Date(invitation.expires_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
