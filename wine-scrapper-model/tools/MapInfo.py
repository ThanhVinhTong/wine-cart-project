from tools import TranslateText

# because each wine card on the website has different columns order so we need to map the wine's information to its appropriate column
def find_info(cols, infos):
    country, region, producer, wine_type, alcohol_content, volume, grape_variety = None, None, None, None, None, None, None

    for col_index in range(0, len(cols)):
        if "Xuất xứ" in cols[col_index].text:
            country = TranslateText.translating("nước " + infos[col_index-1].text).lower()
        if "Vùng làm vang" in cols[col_index].text:
            region = infos[col_index-1].text.lower()
        if "Hãng sản xuất" in cols[col_index].text:
            producer = infos[col_index-1].text.lower()
        if "Loại vang" in cols[col_index].text:
            wine_type = TranslateText.translating(infos[col_index-1].text).lower()
        if "Nồng độ" in cols[col_index].text:
            alcohol_content = infos[col_index-1].text.lower()
        if "Dung tích" in cols[col_index].text:
            volume = infos[col_index-1].text.lower()
        if "Giống nho" in cols[col_index].text:
            grape_variety = infos[col_index-1].text.lower()

    return country, region, producer, wine_type, alcohol_content, volume, grape_variety
