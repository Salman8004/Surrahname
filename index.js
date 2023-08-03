let element=document.getElementById('showhere')
function namaz(){
 const namazname=['Surah Fatiha	سُوْرَۃُ الفَاتِحَة'
 ,'Surah Bakarakh	سُوْرَۃُ البَقَرَة',
 'Surah Alay Imran	سُوْرَۃ آلِ عِمْرَان',
 'Surah Nisa	سُوْرَۃُ النِّسَاء',
 '	Surah Maidah	سُوْرَۃُ المَائِدَة',
 'Surah Anam	سُوْرَۃُ الأَنْعَام','Surah A’araf	سُوْرَۃُ الأَعْرَاف','Surah Anfal	سُوْرَۃُ الأَنْفَال',
 'Surah Toba	سُوْرَۃُ التَّوْبَة','Surah Younas	سُوْرَۃ يُونُس','Surah Hud	سُوْرَۃ هُود'
,'Surah Yousaf	سُوْرَۃ يُوسُف','Surah Ra’ad	سُوْرَۃ الرَّعْد','Surah Ibrahim	سُوْرَۃُ إِبْرَاهِيم'
,'Surah Hijr	سُوْرَۃُ الحِجْر','Surah Nahl	سُوْرَۃُ النَّحْل',
'Surah Isara	سُوْرَۃُ الإِسْرَاء','Surah Kahf	سُوْرَۃ الكَهْف',
'Surah Maryam	سُوْرَۃ مَرْيَم','	Surah Taha	سُوْرَۃ طٰهٰ','Surah Anbia	سُوْرَۃُ الأَنْبِيَاء'
,'Surah Hajj	سُوْرَۃ الحَجّ','Surah Momineen	سُوْرَۃُ المُؤْمِنُون','Surah Nur	سُوْرَۃ النُّور'
,'Surah Furqan	سُوْرَۃ الفُرْقَان','Surah Shu’ara	سُوْرَۃُ الشُّعَرَاء','Surah Namal	سُوْرَۃُ النَّمْل',
'Surah Qasas	سُوْرَۃُ القَصَص','Surah Ankabut	سُوْرَۃُ العَنْكَبُوت','Surah Room	سُوْرَۃ الرُّوم',
'Surah Luqman	سُوْرَۃ لُقْمَان','Surah Sajda	سُوْرَۃُ السَّجْدَة','Surah Ahzaab	سُوْرَۃُ الأَحْزَاب','Surah Saba	سُوْرَۃ سَبَأ',
'Surah Fatir	سُوْرَۃ فَاطِر','Surah Ya-Sin	سُوْرَۃ يٰس','Surah Saaffaat	سُوْرَۃُ الصَّافَّات',
'Surah Saad	سُوْرَۃ ص','Surah Zamar	سُوْرَۃُ الزُّمَر','Surah Ghafir	سُوْرَۃ غَافِر','Surah Fussilat	سُوْرَۃ فُصِّلَت',
'Surah Shurah	سُوْرَۃُ الشُّورىٰ','Surah Zukhraf	سُوْرَۃُ الزُّخْرُف','Surah Dukhan	سُوْرَۃ الدُّخَان','Surah Jasiz	سُوْرَۃ الجَاثِيَة','Surah Ahqaaf	سُوْرَۃُ الأَحْقَاف','Surah Muhammad	سُوْرَۃ مُحَمَّد',
'Surah Fatah	سُوْرَۃُ الفَتْح','Surah Hujraat	سُوْرَۃُ الحُجُرَات',
'Surah Qaaf	سُوْرَۃ ق','Sura Az Zariat	سُوْرَۃُ الذَّارِيَات','	Surah Toor	سُوْرَۃ الطُّور','Surah Najm	سُوْرَۃُ النَّجْم'
,'Sura Qamar	سُوْرَۃُ القَمَر','Sura Rehman	سُوْرَۃ الرَّحْمَٰن','Sura Waqia	سُوْرَۃُ الوَاقِعَة',
'Sura Hadeed	سُوْرَۃُ الحَدِيد','Sura Mujadila	سُوْرَۃُ المُجَادِلَة','Sura Hashr	سُوْرَۃُ الحَشْر'
,'Sura Mumtahana	سُوْرَۃُ المُمْتَحَنَة','Sura Saff	سُوْرَۃُ الصَّفّ','Sura Jum’a	سُوْرَۃُ الجُمُعَة','Sura Munafiqeen	سُوْرَۃُ المُنَافِقُون','Sura Taghabun	سُوْرَۃُ التَّغَابُن','Sura Talaq	سُوْرَۃُ الطَّلَاق',
'Sura Tehreem	سُوْرَۃُ التَّحْرِيم','Sura Mulk	سُوْرَۃُ المُلْك','Sura Qalam	سُوْرَۃ القَلَم','Sura Haaqqa	سُوْرَۃ الحَاقَّة','Sura Ma’arij	سُوْرَۃُ المَعَارِج','	Sura Nooh	سُوْرَۃ نُوح','Sura Jinn	سُوْرَۃُ الجِنّ',
'Sura Muzzammil	سُوْرَۃُ المُزَّمِّل','Sura Muddassir	سُوْرَۃُ المُدَّثِّر','Sura Qiyamah	سُوْرَۃُ القِيَامَة','Sura Al Insaan	سُوْرَۃُ الإِنْسَان','Sura Mursalaat	سُوْرَۃُ المُرْسَلَات','Sura Naba	سُوْرَۃُ النَّبَأ',
'Sura An Naaziat	سُوْرَۃُ النَّازِعَات','Sura Abasa	سُوْرَۃ عَبَسَ','SuraTakweer	سُوْرَۃُ التَّكْوِير','Sura Infitar	سُوْرَۃُ الإِنْفِطَار','Sura Mutaffifeen	سُوْرَۃُ المُطَفِّفِين','Sura Inshiqaaq	سُوْرَۃُ الإِنْشِقَاق',
'Sura Burooj	سُوْرَۃُ البُرُوج','Sura Tariq	سُوْرَۃُ الطَّارِق','Sura A’ala	سُوْرَۃُ الأَعْلَىٰ','Sura Ghashia	سُوْرَۃُ الغَاشِيَة','Sura Fajr	سُوْرَۃُ الفَجْر','Sura Balad	سُوْرَۃُ البَلَد',
'Sura Shams	سُوْرَۃُ الشَّمْس','Sura Al Lail	سُوْرَۃُ اللَّيْل','Sura Zuha	سُوْرَۃُ الضُّحَىٰ','Sura Sharh (Inshirah)	سُوْرَۃُ الشَّرْح','Sura Teen	سُوْرَۃُ التِّين',
'Sura Alaq	سُوْرَۃُ العَلَق','Sura Qadr	سُوْرَۃُ القَدْر','Surah Bayyinah	سُوْرَۃُ البَيِّنَة','Surah Zalzalah	سُوْرَۃُ الزَّلْزَلَة',
'Surah Aadiat	سُوْرَۃُ العَادِيَات','Surah Qariah	سُوْرَۃُ القَارِعَة','Sura Takasur	سُوْرَۃُ التَّكَاثُر','Sura Asr	سُوْرَۃُ العَصْر','Sura Humaza	سُوْرَۃُ الهُمَزَة','Sura Feel	سُوْرَۃُ الفِيل',
'Sura Quraish	سُوْرَۃ قُرَيْش','Sura Maoon	سُوْرَۃُ المَاعُون','Sura Kausar	سُوْرَۃُ الكَوْثَر','Sura Kaafiroon	سُوْرَۃُ الكَافِرُون','Sura Nasr	سُوْرَۃُ النَّصْر','Sura Masad	سُوْرَۃُ المَسَد',
'Sura Ikhlaas	سُوْرَۃُ الإِخْلَاص','Sura Falaq	سُوْرَۃُ الفَلَق','Sura Naas	سُوْرَۃُ النَّاس']
   let inpt=document.getElementById('comand').value
    for (let i= 0; i <inpt; i++) {
        element.innerHTML=namazname[i]  
        
    }

}