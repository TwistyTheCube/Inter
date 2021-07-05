function TriggerMouseOver() {
    document.getElementById("indigo").src = "img/ok-128-2.png";
}
function TriggerMouseOut() {
    document.getElementById("indigo").src = "img/ok-128.png";
}
function TriggerFunction() {
    const TonguçCheckbox = document.getElementById("TonguçCheckbox");
    const NitelikCheckbox = document.getElementById("NitelikCheckbox")
    const SonuçCheckbox = document.getElementById("SonuçCheckbox");
    const SuparaCheckbox = document.getElementById("SuparaCheckbox");
    const PalmeCheckbox = document.getElementById("PalmeCheckbox");
    const GezegenCheckbox = document.getElementById("GezegenCheckbox");
    const KarekökCheckbox = document.getElementById("KarekökCheckbox");
    const ArıCheckbox = document.getElementById("ArıCheckbox");
    const OkyanusCheckbox = document.getElementById("OkyanusCheckbox");
    const HızCheckbox = document.getElementById("HızCheckbox");
    const SınavCheckbox = document.getElementById("SınavCheckbox");
    const EsenCheckbox = document.getElementById("EsenCheckbox");
    const DokuzCheckbox = document.getElementById("9Checkbox");
    const OnCheckbox = document.getElementById("10Checkbox");
    const OnbirCheckbox = document.getElementById("11Checkbox");
    const BiyolojiCheckbox = document.getElementById("BCheckbox");
    const CoğrafyaCheckbox = document.getElementById("ÇCheckbox");
    const EdebiyatCheckbox = document.getElementById("ECheckbox");
    const FizikCheckbox = document.getElementById("FCheckbox");
    const KimyaCheckbox = document.getElementById("KCheckbox");
    const MatematikCheckbox = document.getElementById("MCheckbox");
    const TarihCheckbox = document.getElementById("TCheckbox");
    if (TonguçCheckbox.checked == true) {
        if (DokuzCheckbox.checked == true) {
            if (BiyolojiCheckbox.checked == true) {
                document.querySelector(".T-B-9-KA").style.display = "initial"
                document.querySelector(".T-B-9-Dİ").style.display = "initial"
            }
            if (CoğrafyaCheckbox.checked == true) {
                document.querySelector(".T-Ç-9-KA").style.display = "initial"
                document.querySelector(".T-Ç-9-Dİ").style.display = "initial"
            }
            if (EdebiyatCheckbox.checked == true) {
                document.querySelector(".T-E-9-KA").style.display = "initial"
                document.querySelector(".T-E-9-Dİ").style.display = "initial"
            }
            if (FizikCheckbox.checked == true) {
                document.querySelector(".T-F-9-KA").style.display = "initial"
                document.querySelector(".T-F-9-Dİ").style.display = "initial"
            }
            if (KimyaCheckbox.checked == true) {
                document.querySelector(".T-K-9-KA").style.display = "initial"
                document.querySelector(".T-K-9-Dİ").style.display = "initial"
            }
            if (MatematikCheckbox.checked == true) {
                document.querySelector(".T-M-9-KA").style.display = "initial"
                document.querySelector(".T-M-9-Dİ").style.display = "initial"
            }
            if (TarihCheckbox.checked == true) {
                document.querySelector(".T-T-9-KA").style.display = "initial"
                document.querySelector(".T-T-9-Dİ").style.display = "initial"
            }
        }
        if (OnCheckbox.checked == true) {
            if (BiyolojiCheckbox.checked == true) {
                document.querySelector(".T-B-10-KA").style.display = "initial"
                document.querySelector(".T-B-10-Dİ").style.display = "initial"
            }
            if (CoğrafyaCheckbox.checked == true) {
                document.querySelector(".T-Ç-10-KA").style.display = "initial"
                document.querySelector(".T-Ç-10-Dİ").style.display = "initial"
            }
            if (EdebiyatCheckbox.checked == true) {
                document.querySelector(".T-E-10-KA").style.display = "initial"
                document.querySelector(".T-E-10-Dİ").style.display = "initial"
            }
            if (FizikCheckbox.checked == true) {
                document.querySelector(".T-F-10-KA").style.display = "initial"
                document.querySelector(".T-F-10-Dİ").style.display = "initial"
            }
            if (KimyaCheckbox.checked == true) {
                document.querySelector(".T-K-10-KA").style.display = "initial"
                document.querySelector(".T-K-10-Dİ").style.display = "initial"
            }
            if (MatematikCheckbox.checked == true) {
                document.querySelector(".T-M-10-KA").style.display = "initial"
                document.querySelector(".T-M-10-Dİ").style.display = "initial"
            }
            if (TarihCheckbox.checked == true) {
                document.querySelector(".T-T-10-KA").style.display = "initial"
                document.querySelector(".T-T-10-Dİ").style.display = "initial"
            }
        }
        if (OnbirCheckbox.checked == true) {
            if (BiyolojiCheckbox.checked == true) {
                alert("Tonguç Akademi Şirketinden 11.Sınıfı İçin Biyoloji Kitabı Yoktur");
            }
            if (EdebiyatCheckbox.checked == true) {
                alert("Tonguç Akademi Şirketinden 11.Sınıfı İçin Edebiyat Kitabı Yoktur");
            }
            if (CoğrafyaCheckbox.checked == true) {
                document.querySelector(".T-Ç-11-Dİ").style.display = "initial"
            }
            if (FizikCheckbox.checked == true) {
                document.querySelector(".T-F-11-Dİ").style.display = "initial"
            }
            if (KimyaCheckbox.checked == true) {
                document.querySelector(".T-K-11-Dİ").style.display = "initial"
            }
            if (MatematikCheckbox.checked == true) {
                document.querySelector(".T-M-11-Dİ").style.display = "initial"
                document.querySelector(".T-M-11-FONK").style.display = "initial"
            }
            if (TarihCheckbox.checked == true) {
                document.querySelector(".T-T-11-Dİ").style.display = "initial"
            }
        }
    };
    if (PalmeCheckbox.checked == true) {
        if (DokuzCheckbox.checked == true) {
            if (BiyolojiCheckbox.checked == true) {
                document.querySelector(".P-B-9-KA").style.display = "initial"
                document.querySelector(".P-B-9-KA-2").style.display = "initial"
                document.querySelector(".P-B-9-SK").style.display = "initial"
                document.querySelector(".P-B-9-SK-2").style.display = "initial"
            }
            if (CoğrafyaCheckbox.checked == true) {
                document.querySelector(".P-C-9-KA").style.display = "initial"
                document.querySelector(".P-C-9-SK").style.display = "initial"
            }
            if (EdebiyatCheckbox.checked == true) {
                document.querySelector(".P-E-9-KA").style.display = "initial"
                document.querySelector(".P-E-9-SK").style.display = "initial"
            }
            if (FizikCheckbox.checked == true) {
                document.querySelector(".P-F-9-KA").style.display = "initial"
                document.querySelector(".P-F-9-SK").style.display = "initial"
                document.querySelector(".P-F-9-KA-2").style.display = "initial"
                document.querySelector(".P-F-9-SK-2").style.display = "initial"
            }
            if (KimyaCheckbox.checked == true) {
                document.querySelector(".P-K-9-KA").style.display = "initial"
                document.querySelector(".P-K-9-SK").style.display = "initial"
                document.querySelector(".P-K-9-KA-2").style.display = "initial"
                document.querySelector(".P-K-9-SK-2").style.display = "initial"
            }
            if (MatematikCheckbox.checked == true) {
                document.querySelector(".P-M-9-KA").style.display = "initial"
                document.querySelector(".P-M-9-SK").style.display = "initial"
                document.querySelector(".P-M-9-KA-2").style.display = "initial"
                document.querySelector(".P-M-9-SK-2").style.display = "initial"
            }
            if (TarihCheckbox.checked == true) {
                document.querySelector(".P-T-9-KA").style.display = "initial"
                document.querySelector(".P-T-9-SK").style.display = "initial"
            }
        }
    }    
    if (TonguçCheckbox.checked == false) {
        if (NitelikCheckbox.checked == false) {
            if (SonuçCheckbox.checked == false) {
                if (SuparaCheckbox.checked == false) {
                    if (PalmeCheckbox.checked == false) {
                        if (GezegenCheckbox.checked == false) {
                            if (KarekökCheckbox.checked == false) {
                                if (ArıCheckbox.checked == false) {
                                    if (OkyanusCheckbox.checked == false) {
                                        if (HızCheckbox.checked == false) {
                                            if (SınavCheckbox.checked == false) {
                                                if (EsenCheckbox.checked == false) {
                                                    alert("Lütfen Şirket Seçin");
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    if (BiyolojiCheckbox.checked == false) {
        if (KimyaCheckbox.checked == false) {
            if (CoğrafyaCheckbox.checked == false) {
                if (MatematikCheckbox.checked == false) {
                    if (EdebiyatCheckbox.checked == false) {
                        if (TarihCheckbox.checked == false) {
                            if (FizikCheckbox.checked == false) {
                                alert("Lütfen Ders Seçin")
                            }
                        }
                    }
                }
            }
        }
    };
    if (DokuzCheckbox.checked == false) {
        if (OnCheckbox.checked == false) {
            if (OnbirCheckbox.checked == false) {
                alert("Lütfen Sınıf Seçin")
            }
        }
    }
};