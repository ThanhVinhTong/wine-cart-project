from googletrans import Translator

def translating(str):
    translator = Translator()
    try:
        translation = translator.translate(str, dest='en')
        if translation is not None:
            return translation.text
        else:
            return ""
    except:
        return ""
// automation-note [2026-03-14T14:11:18.636401]
// Add note for response shape stability expected by hero section.
