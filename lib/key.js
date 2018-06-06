const key = {
  lovtre: {
    id: 1,
    title: 'Løvtrær',
    description: '<p>Dette er en nøkkel som tar for seg alle de vanligste løvtrærne vi kan finne i Norge. Den inneholder trær som naturlig hører hjemme i Norge pluss noen vanlige innførte arter. Noen av artene er slått sammen for å kunne gjøre det enklere å finne fram til dem. Denne nøkkelen er hovedsakelig beregnet for bruk i vekstsesongen, hvor man har tilgang til blader, blomster og frukt. Nøkkelen er laget for Arboretet og de Botaniske hager på Milde, Bergen.</p><p>Nøkkelen og illustrasjoner: Kjetil Fossheim Takk til alle som har bidratt med imagesr og til Bjørn Moe for innspill. </p><p>Kilder: Norsk Flora, Johannes Lid og Dagny Tande Lid Trær i Norge og Europa, David More og John White Trær og busker, Hege Vedel og Jette Dahl Møller </p>',
    content: {
      species: [
        {
          speciesId: 2,
          localName: 'Selje',
          latinName: 'Salix caprea',
          speciesText: 'Selje er et stort tre som kan bli opp til 10 m høyt, yngre individer opptrer som busker. Bladene på selje er ovale til eggeformet, med helrandet til svakt bølget kant. Bladene er mer eller mindre håret på oversiden, men har tettere behåring på undersiden. Raklene, også kalt pusekatter eller gåsunger, spretter ut tidlig på våren før bladsprett.  Selje er særbo.',
          values: [
            21,
            6,
            13,
            4,
            3,
            22,
            16
          ],
          images: ['selje2.jpg'],
          webPage: 'https://no.wikipedia.org/wiki/Selje_(tre)'
        }, {
          speciesId: 4,
          localName: 'Osp',
          latinName: 'Populus tremula',
          speciesText: 'Osp kan bli et høyt tre, gjerne 15-20m. Bladene er rund med buktet bladkant. Bladstilken er flat og lang, noe som gjør at bladene beveger seg selv ved svak vind. Barken er gråhvit til gulgrønn, på ungtrær er den glatt, men mer furet på eldre trær. Osp er særbo, og har lange rakler. Hannraklene er lyserøde, mens hunnraklene er kapsler som inneholder mange små hårete vindspredte frø.  Blomstrer før løvsprett.',
          values: [
            23, 4, 3, 22, 16
          ],
          images: [],
          webPage: 'https://no.wikipedia.org/wiki/Osp'
        }, {
          speciesId: 5,
          localName: 'Hengebjørk',
          latinName: 'Betula pendula',
          speciesText: 'Hengebjørk blir store trær på opptil 30 m, karakteristisk ved sine hengende grener. Barken er glatt hvit med horisontale korksporer. Eldre trær er mørkere nederst og har dype furer. Bladene er kileformete eller trekantet og har en dobbelttannet bladkant. Hengebjørk har rakler som blomstrer litt etter løvsprett. \r\n\r\nHengebjørk skilles fra dunbjørk ved at bladene hos dunbjørken er en rundere kileformet og enkelttannet, mens hos hengebjørken er mer tilspisset og dobbelt sagtannet. En annen forskjell er hengebjørkens hengende yttergrener. Kvister hos hengebjørk har vorter, mens hos dunbjørk er de hårete.',
          values: [
            27, 7, 15, 22, 16
          ],
          images: [],
          webPage: 'https://no.wikipedia.org/wiki/Hengebjørk'
        }, {
          speciesId: 6,
          localName: 'Dunbjørk',
          latinName: 'Betula pubescens',
          speciesText: 'Dunbjørk kan være busker eller trær opp til 25 meters høyde. Bladene er konveks kileformet med enkelt tannet bladkant. Barken er hvit, glatt og detter kan løsnes i tynne flak. Barken har gjerne svarte korkfurer horisontalt. Nedre delen av treet kan noen ganger ha en mørkere stamme. Dunbjørken kan vokse høyt til fjells og danner skoggrensen de fleste steder i Norge. \r\nUnge kvister hos dunbjørken har små hår, noe som gjør den har en fløyelsfølelse. \r\n\r\nDunbjørk skilles fra hengebjørk ved at bladene er rundere kileformet og enkelttannet, mens hos hengebjørken er de mer tilspisset og dobbelt sagtannet. En annen forskjell er hengebjørkens hengende yttergrener. Kvister hos hengebjørk har vorter, mens hos dunbjørk er hårete.\r\n',
          values: [
            27, 5, 15, 22, 16
          ],
          images: ['bjork2.jpg'],
          webPage: ''
        }, {
          speciesId: 7,
          localName: 'Svartor',
          latinName: 'Alnus glutinosa',
          speciesText: 'Svartor  kan bli opp mot 20 m høyt. Bladene er runde til omvendt eggeformet,  gjerne med en innbuktning på toppen som gir demhjerteform. Bladkanten er svakt dobbelttannet, og bladene har 4-7 par sidenerver. Den har hunnrakler som ser ut som små brune kongler når frøene er modne. Men før de kommer så langt er dette små røde hunnblomster som sitter på stilker og blomstrer tidlig om våren. Svartoren liker seg på fuktige steder.. Kan skilles fra Gråor ved at gråor har spisse blader og har flere nervepar enn svartoren. Gråor har også hår på endeknoppene, noe som svartoren mangler, og røde hunnblomster som sitter rett på den lodne kvisten. Hannblomstene sitter i gule rakler og blomstrer før løvsprett.',
          values: [
            23, 5, 9, 22, 16
          ],
          images: ['svartor2.jpg'],
          webPage: ''
        }, {
          speciesId: 8,
          localName: 'Gråor',
          latinName: 'Alnus incana',
          speciesText: 'Gråor danner trær på inntil  20 m. Bladene er elliptiske til eggeformet, med en dobbelt sagtannet bladkant. Bladene har 8-12 par sidenerver. Barken på gråoren er grå og glatt, men kan være grovere på eldre stammer. Gråoren foretrekker noe tørrere steder enn det svartoren gjør, og den er mer hardfør. Kan skilles fra svartor ved at gråor har spisse blader og har flere nervepar enn svartoren. Gåror har også hår på endeknoppene, noe som svartoren mangler. De røde hunnblomstene sitter rett på den lodne kvisten. Hannblomstene sitter i gule rakler og blomstrer før løvsprett.',
          values: [
            6, 5, 9, 22, 16
          ],
          images: []
        }, {
          speciesId: 9,
          localName: 'Hassel',
          latinName: 'Corylus avellana',
          speciesText: 'Hassel danner hovedsakelig flerstammete busker og trær som  kan bli opp til 10 meter høye. Barken er lys brun, og eldre planter flaker av tynne skjell. Bladene er runde, ofte store (10 cm i diameter), med en klar spiss i toppen. Bladene har kjertelhår og bladkanten er dobbelt sagtannet. Hannblomster  i rakler, mens hunnblomstene er gjemt i knopper der man kan se røde grifler stikke ut. Om høsten kan man finne opp til fem avlange nøtter sitte sammen i bunter på grenene.',
          values: [
            23,
            5,
            15,
            20,
            16,
            2
          ],
          images: ['hassel1.jpg','hassel2.jpg'],
          webPage: ''
        }, {
          speciesId: 10,
          localName: 'Bøk',
          latinName: 'Fagus sylvatica',
          speciesText: 'Bøk er et høyt tre på opp til 35 m.. Bladene er elliptiske til ovale med en helrandet eller buktet bladkant. Unge blader er silkelodden mens eldre blad har bare hår i kantene. Barken er lys grå til brungul, glatt. Hannblomstene henger i rakler, mens hunnblomsten sitter tettere på stammen med en mykt piggete hams, og inneholder to trekantete nøtter.',
          values: [
            6,
            21,
            13,
            4,
            9,
            20,
            16,
            2
          ],
          images: ['bok1.jpg','bok2.jpg','bok3.jpg'],
          webPage: ''
        }, {
          speciesId: 11,
          localName: 'Eik',
          latinName: 'Quercus sp.',
          speciesText: 'I Norge har vi to arte av eik, sommereik og vintereik. Begge artene blir opp til 25 meter høye trær, med tykke stammer. Barken er grålig hos begge artene, unge trær har slett og blank bark, mens eldre trær har lett furet bark. Blomstringen skjer i slutten av mai, hannblomster i rakler og hunnblomster i små opprettet rakler med få blomster. Eika har nøtter som står i en skål på små stilker fra greina. \r\n\r\nBladene hos eikene er fjærfliket og kan være svakt buktet. Sommereik har kort bladstilk, mens vintereik har lang stilk. Dette er den enkleste måten å se forskjell på dem på. En huskeregel kan være \Norge har en kort sommer og lang vinter”. \r\nBladene på vintereiken kan også bli sittende på treet gjennom vinteren, der av navnet.',
          values: [
            10,
            4,
            9,
            20,
            16,
            2
          ],
          images: ['eik1.jpg','eik2.jpg','eik3.jpg'],
          webPage: ''
        }, {
          speciesId: 13,
          localName: 'Alm',
          latinName: 'Ulmus glabra',
          speciesText: 'Tre på 25-30 meter. Bladene er dobbelt sagtannet, ofte asymmetriske ved grunnen.  Har stive hår på oversiden, som gjør at de føles ru ut. Blomst og frukter er kortskaftet og sitter tett på grenen, og blomsterstanden er tett og skjermformet. Frukten er en nøtt med en bred vingekant. Alm er vindpollinert og vindsprett.',
          values: [
            21, 5, 9, 28, 11
          ],
          images: ['alm2.jpg'],
          webPage: ''
        }, {
          speciesId: 14,
          localName: 'Villeple',
          latinName: 'Malus sylvestris',
          speciesText: 'Villeple eller villapal er et lite tre eller en busk på 2-6 meter. Noen av kortskuddene er omdannet til vedtorner. Bladene er ovale til eggeformet og ender i en klar spiss. Bladkanten er enkelt sagtannet, og bladstilken har hår på oversiden. Frukt er små sure epler.',
          values: [
            21, 13, 3, 25, 11
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 15,
          localName: 'Rogn',
          latinName: 'Sorbus aucuparia',
          speciesText: 'Tre med en høyde på opp til 10 m. Bladene er Finnet med som oftest 6-8 par småblad og et endesmåblad. Småbladene er sagtannet, grønn oppå og sølvaktig av behåring på undersiden. Barken er sølvgrå til brungrå, glatt. Rogn har 5-tallige blomster og sitter i tette kurver, fruktene er små røde steinfrukter. \r\n\r\nRogn kan forveksles med rognasal og fagerrogn. Rognasalen kan skilles på at det kun er løse småblad nederst på bladene og blir mer og mer sammensatt til et fjærformet blad mot toppen. \r\nFagerrogn Ligner på Rogn i bladene, men hos Fagerrogn er endesmåbladet større enn hos Rogn. Endesmåbladet til Fagerrogn er kileformet mot grunnen. ',
          values: [
            8, 7, 9, 24, 19
          ],
          images: ['rogn2.jpg'],
          webPage: ''
        }, {
          speciesId: 16,
          localName: 'Hegg',
          latinName: 'Prunus padus',
          speciesText: 'Hegg danner busker eller trær opp til 10 meter. Bladene er lange elliptiske til litt oval, med en klar spiss. Bladkanten er enkelt sagtannet. Barken er blank, glatt og rødbrun.  Knekte grener har en stram sterk lukt. Blomstene henger i klaser, de er 5-tallige  og  vellduftene. Frukten er små svarte steinfrukter med en fruktstein.  ',
          values: [
            21,
            6,
            7,
            3,
            24,
            18
          ],
          images: ['hegg2.jpg'],
          webPage: ''
        }, {
          speciesId: 17,
          localName: 'Lind',
          latinName: 'Tilia cordata',
          speciesText: 'Lindetrær blir i Norge rundt 20 meter høy. Bladene er litt hjerteformet, og har en meget klar spiss. Bladranden er enkelt sagtannet. Barken er glatt rødbrun hos unge trær, men på eldre trær er den tett furet og brungrå. Blomstene er 5-tallig og henger langstilket i små grupper, og i bunn av gruppen er det et vingeblad som brukes til vindspredning av frøene.',
          values: [
            23,
            7,
            3,
            20,
            28,
            11
          ],
          images: ['lind1.jpg','lind2.jpg'],
          webPage: ''
        }, {
          speciesId: 18,
          localName: 'Kristtorn',
          latinName: 'Ilex aquifolium',
          speciesText: 'Kristtorn danner busker eller små trær på opp til 10 meter. Bladene er læraktig, reflekterende og glatt, og har som oftest pigger lang sidene. Man kan finner blader helt uten pigger, men da er de stort sett tilspisset i en spiss tupp. Bladene sitter ofte på i flere år, og som eneste løvtre i Norge er kristtorn vintergrønn. Barken er Grå med en glatt til vortete struktur. Blomster og bær sitter tett på grenene på små stilker i bladhjørnene.',
          values: [
            21,
            23,
            6,
            10,
            26,
            9,
            3,
            24,
            1
          ],
          images: ['kristtorn2.jpg'],
          webPage: ''
        }, {
          speciesId: 19,
          localName: 'Ask',
          latinName: 'Fraxinus excelsior',
          speciesText: 'Ask kan bli høye trær på over 30 meter. Barken er lys grå og glatt, men på eldre trær har den skorpebark med furer. Unge greiner knekker lett. Bladene er fliket med 7- 15 par småblad. Småbladene er enkelt sagtannet, der tennene er dype. Knoppene er svarte. Blomstene er svartfiolett og sitter tett sammen i små buster og blomstrer før løvsprett. Fruktene henger på lengre stilker og er avlange spydformede nøtter med flyvevinger.',
          values: [
            8,
            7,
            13,
            3,
            28,
            11
          ],
          images: ['ask1.jpg','ask2.jpg','ask3.jpg'],
          webPage: ''
        }, {
          speciesId: 20,
          localName: 'Spisslønn',
          latinName: 'Acer platanoides',
          speciesText: 'Spisslønn kan bli til store trær, opp til 30 m høye. Bladene er håndfliket med 5 fliker, og tilspissete tenner. Barken er gråbrun glatt, men mer regelmessig furet hos eldre trær. Blomsterstanden er 5-tallige gulgrønne blomster i korger. Fruktene består av to delfrukter, der hver vingenøtt har en nøtt og en stor vinge. \r\n\r\nSpisslønn og Platanlønn kan forveksles med hverandre. Der er forskjell på bladene, hvor spisslønn har spissere bladtupper enn platanlønn. I tillegg har bladene til platanlønn så små nedre fliker at det ser ut til å være 3 fliker ikke 5 som på spisslønn. Vinkelen mellom delfruktene hos spisslønn er ca 180 grader, mens hos platanlønn er den ca 90 grader. Blomstene sitter i korger på spisslønn mens henger i klaser på platanlønn. ',
          values: [
            14, 12, 15, 28, 11
          ],
          images: ['spisslon1.jpg','spisslon2.jpg'],
          webPage: ''
        }, {
          speciesId: 21,
          localName: 'Platanlønn',
          latinName: 'Acer pseudoplatanus',
          speciesText: 'Platanlønn er store trær som kan bli 35 meter høy. Bladene er håndfliket med 5 fliker, men kan se ut som å ha 3 fordi  de to nederste parrene er ganske sammenvokst. Bladkanten kan være grovt tannet. Barken er gråbrun glatt, men mer oppsprukket i firkanter hos eldre trær. Blomsterstanden er 5-tallige gulgrønne blomster i hengende klaser. Fruktene består av to delfrukter, der hver vingenøtt har en nøtt og en stor vinge. \r\n\r\nPlatanlønn og Spisslønn kan forveksles med hverandre. Der er stor forskjell på bladene, hvor spisslønn har spissere bladtupper enn Platanlønn. I tillegg har bladene til platanlønn så små nedre fliker at det ser ut til å være 3 fliker ikke 5 som på spisslønn. Vinkelen mellom delfruktene hos spisslønn er  ca 180 grader, mens hos platanlønn er den  ca 90 grader. Blomstene sitter i korger på spisslønn mens de henger i klaser på platanlønn. ',
          values: [
            14, 12, 15, 28, 18
          ],
          images: ['platanlon2.jpg'],
          webPage: ''
        }, {
          speciesId: 22,
          localName: 'Fuglekirsebær',
          latinName: 'Prunus avium',
          speciesText: 'Fuglekirsebær eller morelltre kan få en høyde på 20 meter. Barken er reflekterende lys grå, hos eldre trær mer rødbrun og kan få brede furer. Bladene er elliptiske og har en enkelt sagtannet bladkant. På bladstilken kan man finne to kjertler nærme selve bladet. Fuglekirsebær har ca. 1.5 cm store hvite 5-tallige blomster som sitter sammen i korger. Fruktene er glatte, rødlilla, 1 cm store og velsmakende med en rund stein.',
          values: [
            6, 5, 9, 25, 19
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 23,
          localName: 'Hestekastanje',
          latinName: 'Aesculus hippocastanum',
          speciesText: 'Hestekastanje blir store trær opp til 30 meter. Bladene er koplet med 5-7 småblad, småbladene er eggformede med dobbelt sagtannet bladkant, og har en klar spiss. Barken er mørk brun, og kan sprekke opp i store plater. Blomstene er små, hvite og samlet i store oppstående klaser. Frukten er en pigget kapsel som har en stor nøtt på innsiden.',
          values: [
            17, 5, 9, 20, 18
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 24,
          localName: 'Asal Sp.',
          latinName: 'Sorbus sp.',
          speciesText: 'NA',
          values: [
            10,
            6,
            7,
            5,
            9,
            3,
            24,
            19
          ],
          images: ['asal2.jpg','asal3.jpg'],
          webPage: ''
        }, {
          speciesId: 25,
          localName: 'Svarthyll',
          latinName: 'Sambucus nigra',
          speciesText: 'Svarthyll er en plantet eller forvillet busker eller lite tre på opp til 5 meter.  Bladene er finnete med 5-7 par småblader. Småbladene er elliptiske og har en sterkt sagtannet bladkant. Bladflaten har grov struktur. Blomstene er hvite og i store skjermer/korger, og den får små svarte frukter med 3-5 steiner.',
          values: [
            8, 7, 3, 24, 19
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 26,
          localName: 'Rødhyll',
          latinName: 'Sambucus racemosa',
          speciesText: 'Rødhyll er en plantet eller forvillet busk eller lite trær på opp til 4 meter.  Bladene er finnete med 5-7 par småblader. Småbladene er elliptiske og har en sterkt sagtannet bladkant. Bladkanten er dypere sagtannet enn hos svarthyll. Blomstene er grønngule og i store klaser, og den får små røde frukter med 3-5 steiner. Bærene er litt giftig. ',
          values: [
            8, 7, 3, 24, 18
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 27,
          localName: 'Krossved',
          latinName: 'Viburnum opulus',
          speciesText: 'Krossved er store busker på opp til 5 meter. Bladene er håndfliket med 3-5 fliker, bladkanten er grovt tannet. Blomstene er hvit til rosa og er radiærsymmetriske. Blomstene sitter i skjermer og har store sterile blomster ytterst og små fertile blomster innerst. Fruktene er røde.',
          values: [
            14, 12, 15, 24, 19
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 28,
          localName: 'Hagtorn',
          latinName: 'Crataegus monogyna',
          speciesText: 'Hagtorn er en busk eller et lite tre. Bladene er dypt fliket til fjærfliket. Bladkanten er helrandet til sagtannet.  Blomster i halvskjermer, hvite, med dårlig lukt. Frukten er røde bærepler, med en stein. Barken er brunlig med torner. ',
          values: [
            10,
            14,
            13,
            7,
            9,
            24,
            19
          ],
          images: [],
          webPage: ''
        }, {
          speciesId: 30,
          localName: 'Trollhegg',
          latinName: 'Frangula alnus',
          speciesText: 'Trollhegg er en busk eller et lite tre på opp til 6 meter. Bladene elliptiske men en litt diffus tupp. Bladkanten er helrandet. Blomster er 5-tallig, egghvite til lysegul, frukten er først rød og seinere svart. Blomster og frukter sitter på små stikler tett på greinene.',
          values: [
            6, 13, 3, 24, 11
          ],
          images: ['trollhegg2.jpg'],
          webPage: ''
        }
      ],
      trait: [
        {
          traitId: 1,
          traitText: 'Blad',
          keyId: 1,
          values: [
            {
              valueId: 6,
              valueText: 'Elliptiske',
              valueInfo: 'NA',
              traitId: 1,
              images: ['fjernervet.png']
            }, {
              valueId: 8,
              valueText: 'Finnet',
              valueInfo: 'NA',
              traitId: 1,
              images: ['finnet.png']
            }, {
              valueId: 10,
              valueText: 'Fjærformet',
              valueInfo: 'NA',
              traitId: 1,
              images: ['fjerform.png']
            }, {
              valueId: 14,
              valueText: 'Håndfliket',
              valueInfo: 'NA',
              traitId: 1,
              images: ['hand.png']
            }, {
              valueId: 17,
              valueText: 'Koplet',
              valueInfo: 'NA',
              traitId: 1,
              images: ['koplet.png']
            }, {
              valueId: 21,
              valueText: 'Ovalt / Eggeformet',
              valueInfo: 'NA',
              traitId: 1,
              images: ['oval.png']
            }, {
              valueId: 23,
              valueText: 'Rund',
              valueInfo: 'NA',
              traitId: 1,
              images: ['rund.png']
            }, {
              valueId: 27,
              valueText: 'Trekantet',
              valueInfo: 'NA',
              traitId: 1,
              images: ['trekantet.png']
            }
          ]
        }, {
          traitId: 2,
          traitText: 'Bladkant',
          keyId: 1,
          values: [
            {
              valueId: 4,
              valueText: 'Buktet',
              valueInfo: 'NA',
              traitId: 2,
              images: ['buktet.png']
            }, {
              valueId: 5,
              valueText: 'Dobbelt sagtannet',
              valueInfo: 'NA',
              traitId: 2,
              images: ['dobbeltsagtannet.png']
            }, {
              valueId: 7,
              valueText: 'Enkelt sagtannet',
              valueInfo: 'NA',
              traitId: 2,
              images: ['sagtannet.png']
            }, {
              valueId: 12,
              valueText: 'Grovt Tannet',
              valueInfo: 'NA',
              traitId: 2,
              images: ['grovttannet.png']
            }, {
              valueId: 13,
              valueText: 'Helrandet',
              valueInfo: 'NA',
              traitId: 2,
              images: ['hel.png']
            }, {
              valueId: 26,
              valueText: 'Tagget',
              valueInfo: 'NA',
              traitId: 2,
              images: ['tagget.png']
            }
          ]
        }, {
          traitId: 3,
          traitText: 'Bladnerver',
          keyId: 1,
          values: [
            {
              valueId: 3,
              valueText: 'Buenervet',
              valueInfo: 'NA',
              traitId: 3,
              images: ['buenervet.png']
            }, {
              valueId: 9,
              valueText: 'Fjærnervet',
              valueInfo: 'NA',
              traitId: 3,
              images: ['fjernervet.png']
            }, {
              valueId: 15,
              valueText: 'Håndnervet',
              valueInfo: 'NA',
              traitId: 3,
              images: ['hand.png']
            }
          ]
        }, {
          traitId: 4,
          traitText: 'Frukt',
          keyId: 1,
          values: [
            {
              valueId: 20,
              valueText: 'Nøtter',
              valueInfo: 'NA',
              traitId: 4,
              images: ['nut.png']
            }, {
              valueId: 22,
              valueText: 'Rakler',
              valueInfo: 'NA',
              traitId: 4,
              images: ['rakler.png']
            }, {
              valueId: 24,
              valueText: 'Små bærlignende frukter',
              valueInfo: 'NA',
              traitId: 4,
              images: ['ber.png']
            }, {
              valueId: 25,
              valueText: 'Steinfrukt',
              valueInfo: 'NA',
              traitId: 4,
              images: ['stinfrukt.png']
            }, {
              valueId: 28,
              valueText: 'Vingede frukter',
              valueInfo: 'NA',
              traitId: 4,
              images: ['flygenut.png']
            }
          ]
        }, {
          traitId: 5,
          traitText: 'Blomster',
          keyId: 1,
          values: [
            {
              valueId: 1,
              valueText: 'Blomster i bladhjørner',
              valueInfo: 'NA',
              traitId: 5,
              images: ['blomstbladgjorne.png']
            }, {
              valueId: 2,
              valueText: 'Blomster små eller få tett på grenen',
              valueInfo: 'NA',
              traitId: 5,
              images: ['blomstliten.png']
            }, {
              valueId: 11,
              valueText: 'Få blomster i små kvaster',
              valueInfo: 'NA',
              traitId: 5,
              images: ['blomsttett.png']
            }, {
              valueId: 16,
              valueText: 'I rakler',
              valueInfo: 'NA',
              traitId: 5,
              images: ['rakler.png']
            }, {
              valueId: 18,
              valueText: 'Mange blomster sammen i klaser/topper',
              valueInfo: 'NA',
              traitId: 5,
              images: ['blomstklase.png']
            }, {
              valueId: 19,
              valueText: 'Mange blomster sammen i korger',
              valueInfo: 'NA',
              traitId: 5,
              images: ['blomstBukett.png']
            }
          ]
        }
      ]
    }
  },
  bartre: {
    id: 2,
    title: 'Bartrær',
    description: '<p>Dette er en nøkkel som tar for seg alle de vanligste bartrærne vi kan finne i Norge. Den inneholder trær som naturlig hører hjemme i Norge pluss noen vanlige innførte arter. Noen av artene er slått sammen for å kunne gjøre det enklere å finne fram til dem. Denne nøkkelen kan brukes hele året siden de fleste nåletrær er vintergrønne. Nøkkelen er laget for Arboretet og de Botaniske hager på Milde, Bergen.</p><p>Nøkkelen og illustrasjoner: Kjetil Fossheim Takk til alle som har bidratt med bilder og til Bjørn Moe for innspill. </p><p>Kilder: Norsk Flora, Johannes Lid og Dagny Tande Lid Trær i Norge og Europa, David More og John White Trær og busker, Hege Vedel og Jette Dahl Møller </p>',
    content: {
    species: [
      {
        speciesId: 1,
        localName: 'Furu',
        latinName: 'Pinus sylvestris',
        speciesText: 'Furu er et nåletre  på opp til 25 m. Barken er rødbrun og tynn, skallete i treets unge alder, men blir mørk og hardere på eldre trær. Nålene er blågrønne,  spisse og sitter to og to sammen. Hannblomstene finner man på langskudd som små skudd med blomster, mens hunnblomstene finner man ytterst på årsskudd. Hunnblomsten er en oppoverstående ertestor kongle som etter bestøvning vender seg nedover og vokser i tre år til konglen er moden.   \r\nFuru kan noen steder forveksles med buskfuru (P. mugo) og vrifuru (P. contorta) som begge er innførte arter i Norge.',
        values: [
          12,
          18,
          5,
          21,
          20,
          4
        ],
        images: ['furu1.jpg','furu2.jpg'],
        webPage: ''
      }, {
        speciesId: 2,
        localName: 'Hemlokk',
        latinName: 'Tsuga sp.',
        speciesText: 'Hemlokk er trær som blir opp til 30 meter høy. Nålene hos hemlokk sitter enkeltvis og er tydelig skaftet, med to hvite striper på undersiden. Nålene er myke og stikker ikke. Hemlokk har små kongler. Hemlokk trær kan kjennes igjen på avstand ved at toppen på treet henger litt og ikke står rett opp.',
        values: [
          9,
          8,
          15,
          3,
          16,
          23
        ],
        images: ['hemlokk1.jpg','hemlokk2.jpg','hemlokk3.jpg'],
        webPage: ''
      }, {
        speciesId: 3,
        localName: 'Gran',
        latinName: 'Picea abies',
        speciesText: 'Gran er et høyt tre og kan bli opp mot 30-40m. Høyt. Barken er brun til brungrå. Nålene sitter enkeltvis og er stive, litt firkantet, og spiss. Fargen er lik på begge siden av nålen. Konglene er store, opp til 15 cm lang og hengende. Kan forveksles med sitkagran som er plantet og forvillet mange steder. Disse skilles ved at sitkagran har mye mindre, tynnere og mykere kongler. I tillegg er sitkagran sine nåler blåhvit på undersiden. Sitkagran har også spissere nåler som gjør at de stikker mer.',
        values: [
          9,
          18,
          13,
          3,
          17,
          4
        ],
        images: ['gran1.jpg','gran2.jpg','gran3.jpg','gran4.jpg'],
        webPage: ''
      }, {
        speciesId: 4,
        localName: 'Sitkagran',
        latinName: 'Picea sitchensis',
        speciesText: 'Sitkagran er et høyt tre og kan bli opp mot 40 m. . Barken er mørkegrå oppsprukket hos yngre trær, men mer skjellete og tykkere hos eldre trær. Nålene sitter enkeltvis og er stive, litt firkantet, og spiss. Fargen er grønn på oversiden og blåhvit på undersiden. Konglene er store, opp til 10 cm lang og hengende. Kan forveksles med gran. Disse skilles ved at sitkagran har mye mindre, tynnere og mykere kongler. I tillegg at Sitkagranen sine nåler blålig på undersiden. Sitkagran har også spissere nåler som gjør at de stikker mer.',
        values: [
          9,
          18,
          13,
          3,
          25,
          22
        ],
        images: [],
        webPage: ''
      }, {
        speciesId: 5,
        localName: 'Europalerk',
        latinName: 'Larix decidua',
        speciesText: 'Europalerk er trær som når en høyde på 30 meter. Nålene er bløte og står i korger på greinene, men enkeltvis og ytterst på greinen. Europalerk er ikke vintergrønn og nålene felles om høsten. Konglene er opprettet og har avrundete kongleskjell.',
        values: [
          11,
          8,
          15,
          3,
          26,
          4
        ],
        images: ['lerk1.jpg','lerk2.jpg','lerk3.jpg'],
        webPage: ''
      }, {
        speciesId: 6,
        localName: 'Barlind',
        latinName: 'Taxus baccata',
        speciesText: 'Barlind er en busk eller et tre på opp til 15 m høyt. Barken er rødbrun skjellete. Nålene er flate, myke og er mørk grønn på oversiden, men lysere med to gulgrønne bånd på undersiden. Barlind skiller seg fra de andre nåletrærne våre ved at de ikke har kongler, men har et frø som sitter i en rød kjøttfull frøkappe (arillus) som dekker halve frøet. Hannblomstene er små lysegule blomster i tette klaser. Barlind er særbo og har egne hann- og hunn-planter.',
        values: [
          9,8,24,19
        ],
        images: [],
        webPage: ''
      }, {
        speciesId: 7,
        localName: 'Einer',
        latinName: 'Juniperus communis',
        speciesText: 'Einer er som oftest busker men kan bli til  små trær på opp til 10 meter. Nålene er sylspisse og sitter i 3-tallige kranser, oversiden er blågrønne men mørkere på undersiden. Hannblomstene er små gulgrønne, hunnblomstene er runde grønne. Frø sitter i bærkongler som er grønn første året og blir blå andre året.',
        values: [
          10,18,2,19
        ],
        images: [],
        webPage: ''
      }, {
        speciesId: 8,
        localName: 'Edelgran',
        latinName: 'Abies sp.',
        speciesText: 'Det er flere arter edelgran, men ingen hører naturlig til i Norge. De høyeste artene kan bli opp mot 50 meter høy (men ikke i Norge). Barken er glatt med en vortete struktur. Nålene er flate og sitter enkeltvis, grønn og er har to hvitaktige striper på undersiden. Konglene hos edelgran sitter oppreist på greinene. Når frøene sprees går hele konglen i oppløsning, og til slutt står det bare igjen en stilk i midten.',
        values: [
          9,
          8,
          18,
          13,
          3,
          27,
          23
        ],
        images: [],
        webPage: ''
      }, {
        speciesId: 9,
        localName: 'Tuja',
        latinName: 'Thuja sp.',
        speciesText: 'Det finnes en rekke tuja arter i Norge, alle er innført. Tuja er mye brukt som hekkbusker, men kan finnes som trær på opp til 60 meter (men ikke i Norge). Tuja har ikke nåler, men motsatte skjellformede blad tett til greinen. Konglene er små med få avlange kongleskjell.',
        values: [
          14,
          8,
          6,
          21,
          1,
          7
        ],
        images: [],
        webPage: ''
      }
    ],
    trait: [
      {
        traitId: 1,
        traitText: 'Blader / Nåler',
        keyId: 2,
        values: [
          {
            valueId: 9,
            valueText: 'Nåler enkeltvis',
            valueInfo: 'NA',
            traitId: 1,
            images: ['enkeltvis.png']
          }, {
            valueId: 10,
            valueText: 'Nåler i 3-tallige kranser',
            valueInfo: 'NA',
            traitId: 1,
            images: ['einer.png']
          }, {
            valueId: 11,
            valueText: 'Nåler i dvergskudd',
            valueInfo: 'NA',
            traitId: 1,
            images: ['lerk.png']
          }, {
            valueId: 12,
            valueText: 'Nåler sammen i bunter på 2',
            valueInfo: 'NA',
            traitId: 1,
            images: ['dobbel.png']
          }, {
            valueId: 14,
            valueText: 'Skjellformede',
            valueInfo: 'NA',
            traitId: 1,
            images: ['sjell.png']
          }
        ]
      }, {
        traitId: 2,
        traitText: 'Nålekvalitet',
        keyId: 2,
        values: [
          {
            valueId: 8,
            valueText: 'Myke',
            valueInfo: 'NA',
            traitId: 2,
            images: []
          }, {
            valueId: 18,
            valueText: 'Stikkende',
            valueInfo: 'NA',
            traitId: 2,
            images: []
          }
        ]
      }, {
        traitId: 3,
        traitText: 'Kongler',
        keyId: 2,
        values: [
          {
            valueId: 2,
            valueText: 'Bærkongler',
            valueInfo: 'NA',
            traitId: 3,
            images: ['berkongle.png']
          }, {
            valueId: 5,
            valueText: 'Kjegleformet',
            valueInfo: 'NA',
            traitId: 3,
            images: ['furukongle.png']
          }, {
            valueId: 6,
            valueText: 'Liten med få kongleskjell',
            valueInfo: 'NA',
            traitId: 3,
            images: ['tujaKongle.png']
          }, {
            valueId: 13,
            valueText: 'Sigarformet',
            valueInfo: 'NA',
            traitId: 3,
            images: ['sigar.png']
          }, {
            valueId: 15,
            valueText: 'Små runde til ovale',
            valueInfo: 'NA',
            traitId: 3,
            images: ['litenKongle.png']
          }, {
            valueId: 24,
            valueText: 'Uten kongler, frø med rød fruktkappe',
            valueInfo: 'NA',
            traitId: 3,
            images: ['ber_barlind.png']
          }
        ]
      }, {
        traitId: 4,
        traitText: 'Kongleskjell tykkelse',
        keyId: 2,
        values: [
          {
            valueId: 3,
            valueText: 'Flat',
            valueInfo: 'NA',
            traitId: 4,
            images: []
          }, {
            valueId: 21,
            valueText: 'Tykkere/trekantet',
            valueInfo: 'NA',
            traitId: 4,
            images: []
          }
        ]
      }, {
        traitId: 5,
        traitText: 'Kongleskjellform',
        keyId: 2,
        values: [
          {
            valueId: 1,
            valueText: 'Avlange',
            valueInfo: 'NA',
            traitId: 5,
            images: ['avlang.png']
          }, {
            valueId: 16,
            valueText: 'Spydformet fra små kongler',
            valueInfo: 'NA',
            traitId: 5,
            images: ['spydformet.png']
          }, {
            valueId: 17,
            valueText: 'Spydformet, med eller uten spalte i topp',
            valueInfo: 'NA',
            traitId: 5,
            images: ['spydformSpalte.png']
          }, {
            valueId: 20,
            valueText: 'Trekantet',
            valueInfo: 'NA',
            traitId: 5,
            images: ['furu.png']
          }, {
            valueId: 25,
            valueText: 'Vifteformet med frynser i topp',
            valueInfo: 'NA',
            traitId: 5,
            images: ['frynset.png']
          }, {
            valueId: 26,
            valueText: 'Vifteformet, fra små kongler',
            valueInfo: 'NA',
            traitId: 5,
            images: ['vifte.png']
          }, {
            valueId: 27,
            valueText: 'Vifteformet, kan ha frynser i topp. ',
            valueInfo: 'NA',
            traitId: 5,
            images: ['vifteKanfrynser.png']
          }
        ]
      }, {
        traitId: 6,
        traitText: 'Nålefarge',
        keyId: 2,
        values: [
          {
            valueId: 4,
            valueText: 'Gjevt farget grønn til blågrønn',
            valueInfo: 'NA',
            traitId: 6,
            images: []
          }, {
            valueId: 7,
            valueText: 'Lys grønn',
            valueInfo: 'NA',
            traitId: 6,
            images: []
          }, {
            valueId: 19,
            valueText: 'Toppside blågrønn, underside mørk grønn',
            valueInfo: 'NA',
            traitId: 6,
            images: []
          }, {
            valueId: 22,
            valueText: 'Underside blåhvit eller blek grønn, topp grønn',
            valueInfo: 'NA',
            traitId: 6,
            images: []
          }, {
            valueId: 23,
            valueText: 'Undersiden har to tydelig hvite striper',
            valueInfo: 'NA',
            traitId: 6,
            images: []
          }
        ]
      }
    ]
  }
  }
};

export default key;
