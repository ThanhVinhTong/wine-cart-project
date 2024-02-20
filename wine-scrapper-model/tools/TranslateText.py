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