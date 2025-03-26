import React, { useState, useEffect } from "react";

const TranslationToggle: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  // Initialize Google Translate API
  useEffect(() => {
    // Add Google Translate script to the page
    const addScript = () => {
      if (!document.querySelector('script[src*="translate_a/element.js"]')) {
        console.log("Adding Google Translate script");
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onload = () => console.log("Google Translate script loaded");
        script.onerror = () =>
          console.error("Failed to load Google Translate script");
        document.body.appendChild(script);
      }
    };

    // Initialize the translation function
    (window as any).googleTranslateElementInit = () => {
      console.log("Google Translate initialized");
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fr",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Add hidden div for Google Translate
    if (!document.getElementById("google_translate_element")) {
      const translateDiv = document.createElement("div");
      translateDiv.id = "google_translate_element";
      translateDiv.style.display = "none";
      document.body.appendChild(translateDiv);
      addScript();
    }
  }, []);

  // Function to wait for the dropdown to be available
  const waitForDropdown = (callback: () => void) => {
    const interval = setInterval(() => {
      const selectDropdown =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectDropdown) {
        console.log("Translation dropdown found");
        clearInterval(interval);
        callback();
      }
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      console.error("Translation dropdown not found after timeout");
    }, 5000);
  };

  // Function to toggle the language
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);

    waitForDropdown(() => {
      const selectDropdown =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectDropdown) {
        selectDropdown.value = newLanguage;
        selectDropdown.dispatchEvent(new Event("change"));
      } else {
        console.error(
          "Translation dropdown not found. Ensure the Google Translate script has loaded."
        );
      }
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="translate-button"
      style={{
        padding: "8px 16px",
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {language === "en" ? "Traduire en Français" : "Translate to English"}
    </button>
  );
};

export default TranslationToggle;
