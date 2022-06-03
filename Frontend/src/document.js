const html = (info ) => `
<html>
<body style="width:100%; font-size:16px;padding:2rem;">
    <h5 style="width:100%; font-size:16px;">Anul ${new Date( ).getFullYear( )}</h5>
     <h5>Nume si Prenume: ${info.fullname} </h5>
      <h5>Varsta: ${info.age}  ani </h5>
      <br/>
      <h2>Chestionar pentru donatorul de sange</h2>
      <br/>
      <h3>Convorbirea in cadrul consultatiei medicale este acoperita de secretul medical.
Precautiunile sunt luate in scopul securitatii medicale, atat pentru donator cat si pentru
primitorul de sange ) </h3>
        <br/>
        <p>1 )  Considerati ca aveti o stare buna de sanatate? ${info[0] ? 'DA' : 'NU'}</p>
        <p>2 )  in ultima vreme ati avut o pierdere in greutate neasteptata,? ${info[1] ? 'DA' : 'NU'}</p>
        <p>3 )  in ultima vreme ati avut febra neexplicabila? ${info[2] ? 'DA' : 'NU'}</p>
        <p>4 )  in ultima vreme ati avut tratament stomatologic, vaccinari? ${info[3]? 'DA': 'NU'}</p>
        <p>5 )  Urmati vreun tratament medicamentos? ${info[4] ? 'DA' : 'NU'}</p>
        <p>6 )  Sunteti fumator?  ${info[5] ? 'DA' : 'NU'}</p>
        <p>7 )  Ati consumat alcool recent ?  ${info[6] ? 'DA' : 'NU'}</p>

        <p>8 )  in ultimele 12 luni ati avut contact sexual cu un partener cu hepatita sau HIV pozitiv? ${info[7] ? 'DA' : 'NU'}</p>
        <p>9 )  in ultimele 12 luni ati avut contact sexual cu un partener ce se drogheaza prin injectii? ${info[8]? 'DA': 'NU'}</p>
        <p>10 )  in ultimele 12 luni ati avut contact sexual cu un partener care este platit pentru sex? ${info[9] ? 'DA' : 'NU'}</p>
        <p>11  )  in ultimele 12 luni ati avut contact sexual cu un partener cu hemofilie? ${info[10] ? 'DA' : 'NU'}</p>
        <p>12 )  in ultimele 12 luni ati avut contact sexual cu parteneri multipli? ${info[11] ? 'DA' : 'NU'}</p>

        <p>13 )  V-ati injectat vreodata droguri? ${info[12] ? 'DA' : 'NU'}</p>
        <p>14 )  Ati acceptat bani sau droguri pentru a intretine relatii sexuale? ${info[13] ? 'DA' : 'NU'}</p>
        <p>15 )  Ati avut relatii sexuale cu un alt barbat? ${info[14] ? 'DA' : 'NU'}</p>
        <p>16 )  A avut partenerul dumneavoastra relatii sexuale cu un alt barbat? ${info[15] ? 'DA' : 'NU'}</p>
        <p>17 )  Ati schimbat partenerul (partenera ) in ultimele 6 luni? ${info[16] ? 'DA' : 'NU'}</p>

        <p>18 )  De la ultima donare, sau in ultimele 12 luni ati suferit o interventie chirurgicala sau investigatii medicale? ${info[17] ? 'DA' : 'NU'}</p>
        <p>19 )  De la ultima donare, sau in ultimele 12 luni ati suferit tatuaje, acupunctura, gauri pentru cercei?  ${info[18] ? 'DA' : 'NU'}</p>
        <p>20 )  De la ultima donare, sau in ultimele 12 luni ati fost transfuzat (a )?   ${info[19] ? 'DA' : 'NU'}</p>
        <p>21 )  De la ultima donare, sau in ultimele 12 luni ati fost insarcinata?  ${info[20] ? 'DA' : 'NU'}</p>

        <p>22 )  Ati suferit vreodata de icter, tuberculoza, febra reumatica, malarie?   ${info[21] ? 'DA' : 'NU'}</p>
        <p>23 )  Ati suferit vreodata de boli de inima, tensiune arteriala mare sau mica?   ${info[22] ? 'DA' : 'NU'}</p>
        <p>24 )  Ati suferit vreodata de accidente vasculare cardiace sau cerebrale?   ${info[23] ? 'DA' : 'NU'}</p>
        <p>25 )  Ati suferit vreodata de boli cronice (diabet, ulcer, cancer, astm ) ?  ${info[24] ? 'DA' : 'NU'}</p>

        <p>26 )  Ati fost expusi la hepatita(bolnavi in familie sau risc profesional )?   ${info[25] ? 'DA' : 'NU'}</p>
        <p>27 )  Ati fost in detentie (INCHISOARE ) in ultimul an?  ${info[26] ? 'DA' : 'NU'}</p>
        <p>28 )  Ati fost refuzat sau amanat la o donare anterioara?  ${info[27] ? 'DA' : 'NU'}</p>
        <p>29 )  Aveti pasiuni sau ocupatii ce necesita atentie speciala 24 ore postdonare (de ex: sofer, alpinist, scafandru, etc ) ? ${info[28]? 'DA': 'NU'}</p>
        <p>30 )  V-ati nascut, ati trait sau calatorit in strainatate?  ${info[29] ? 'DA' : 'NU'}</p>
        <br/>
        <br/>
        <h3>Ce trebuie donatorii de sange sa stie</h3>
        <br/>
        <p>a )   Importanta sangelui, procesul de donare de sange si principalele beneficii ale pacientului transfuzat;</p>
        <p>b )   Protectia si confidentialitatea datelor personale ale donatorului, respectiv identitatea si starea de sanatate a acestuia , rezultatele testelor efectuate, care nu vor fi furnizate fara autorizare;</p>
        <p>c  )  Natura procedurilor implicate in donarea de sange sau de componentele sanguine destinate a fi transfuzate unor alte persoane si riscurile asociate fiecareia in parte;</p>
        <p>d  )  Optiunea donatorilor de a se razgandi in ceea ce priveste actul donarii, inainte de a merge mai departe sau despre eventualitatea de a se autoexclude in orice moment in cursul procesului de donare, fara nici un fel de jena sau discomfort;</p>
        <p>e  )  Donatorii sa informeze centrul de transfuzie sanguina despre orice eventual eveniment ulterior transfuziei ce poate face donarea anterioara improprie pentru terapia transfuzionala;</p>
        <p>f  )  Responsabilitatea centrului de transfuzie sanguina de a informa donatorul printr-un mecanism adecvat care sa asigure pastrarea confidentialitatii , daca rezultatele testelor arata vreo anomalitate cu semnificatie asupra starii de sanatate a donatorului; crearea de mecanisme de informare a donatorului, ulterior donarii, motivelor pentru care unitatile de sange si componente sanguine nefolosite provenite din donarea autologa, vor fi rebutate si nu transfuzate altor pacienti;</p>
        <p>h  )  Rezultatele testelor ce detecteaza markeri pentru virusuri sau agenti microbieni cu transmitere transfuzionala vor duce la excluderea donatorilor si distrugerea unitatilor de sange colectate;</p>
        <p>i  )  Donatorii sa puna intrebari in orice moment;</p>
        <p>j  )  La selectia potentialilor donatori, donarea se realizeaza exclusiv la sediul unde se efectueaza recoltarea numai de catre personalul instruit al centrelor de transfuzie sanguina teritoriale (CTS ), precum si la sediul celui mai apropiat centru de transfuzie sanguina;</p>
        <p>k  )  Donarea de sange, in Romania este voluntara si neremunerata; persoanele care au donat sau doneaza sange nu pot primi recompense de natura materiala, cum ar fi premii in bani, gratificatii salariale, pensie de stat sau ajutor social, pentru faptul ca au donat sange sau componente sanguine;</p>
        <p>l  )  Beneficiile si riscurile pentru sanatate ale donarii de sange;</p>
        <p>m  )  Explicarea criteriilor de excludere pentru donatorii de sange;</p>
        <p>n  )  Existenta si semnificatia “consimtamantului informat;</p>
        <p>o  )  Importanta efectuarii examinarii medicale si a testelor obligatorii, solicitatea antecedentelor fiziologice si patologice si motivarea acestora;</p>
        <p>p  )  Nedeclararea intentionata de catre donator a bolilor transmisibile sau a factorilor de risc cunoscuti, constituie infractiune ce se pedepseste conform art ) 39 si 40 din Legea nr ) 282/2005;</p>
        <p>q  )  Pot dona sange la centrul de transfuzie sanguina dintr-un anumit teritoriu cetatenii altor tari, care locuiesc in Romania de cel putin un an si care pot prezenta acte doveditoare in acest sens, originale sau copii legalizate la notariat;</p>
        <p>r  )  Cetatenii romani care au domiciliul stabil, serviciul sau studiaza in teritoriul arondat centrului de transfuzie sanguina, respectiv cetatenii romani care au donat sange sau componente sanguine intr-un alt centru de transfuzie sanguina, dar si-au schimbat domiciliul de cel putin 6 luni in teritoriul respectiv si care pot prezenta acte doveditoare, sunt eligibili pentru donarea de sange;</p>
        <p>s  )  Militarii din unitatile situate in raza teritoriala a centrului de transfuzie sanguina teritorial, pot dona sange la acest centru;</p>
        <p>t  )  Conditiile pe care trebuie sa le indeplineasca potentialul donator in vederea donarii de sange, respectiv sa aiba o stare buna de sanatate fizica si mentala, o stare de igiena personala corespunzatoare si sa prezinte documentele medicale doveditoare ca a efectuat examenele medicale recomandate de medicul responsabil cu selectia donatorilor;</p>
        <p>u  )  Potentialul donator de sange este eligibil numaiin conditiile in care nu apartine grupului care prin comportamentul sexual sau/si habitual il plaseaza in zona cu risc de a contacta sau/si de a raspandi afectiuni severe ce se pot transmite prin sange ) </p>
        <br/>
        <br/>
          <br/>
        <br/>
          <br/>
        <br/>
        <h5>Data ${new Date( ).toISOString( ).substring(0, 10 )}</h5>
         <br/>
        <br/>
        <h6>Am luat la cunostinta</h6>
        <h6>Semnatura</h6>
</body>
</html>`

export {html}