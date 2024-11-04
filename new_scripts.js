$( '.title_and_subtitle' ).onclick = () => {window.location.href = './';}
$( '.lang_btn' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?lang=english";}
$( '.contacto_btn' ).onclick = () => {window.location.href = "./nuevo_contacto.html";}
if ( window.location.href.includes( "lang=english" ) ) {
    $( '.title_and_subtitle' ).onclick = () => {window.location.href = './' + "?lang=english";}
    $( '.subtitle' ).innerText = `Friday November 29 - Sunday December 1, 2024`;
    $( '.lang_btn span' ).innerText = `Español`;
    $( '.lang_btn' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;}
    $( '.contacto_btn span' ).innerText = `Contact`;
    $( '.contacto_btn' ).onclick = () => {window.location.href = "./nuevo_contacto.html?lang=english";}

    // translation logic
    var idx = window.location.pathname.lastIndexOf( "/" );
    var page_were_on = window.location.pathname.substring( idx + 1 );
    if ( page_were_on === "" || page_were_on === "new_hackalajara_webpage.html" || page_were_on === "new_index.html" || page_were_on === "index.html" ) {
        $( '.sub_subtitle' ).innerText = `Presented by`;
        $( '.patrocinadores_label' ).innerText = `Sponsored by`;
        $( '.que_es_label' ).innerText = `What is it?`;
        $( '.que_es_descripcion' ).innerText = `Come to the first bitcoin-focused hackathon in Guadalajara, Mexico! Have an idea for how to improve bitcoin? Want to meet other bitcoiners and hack something out? Join us and help make the dream of sound, digital money come true!`;
        $( '.donde_es_label' ).innerText = `Where is it?`;
        $( '.categorias' ).innerHTML = `
            <h2 class="ultrabold uppercase categorias_label">Prize categories</h2>
            <p class="uppercase pgraph">Best programming hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</p>
            <p class="uppercase pgraph">Best design hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</p>
            <p class="uppercase pgraph">Best education hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</p>
        `;
        $( '.registrar_btn span' ).innerText = `Register here`;
        $( '.mentores_label' ).innerText = `Mentors and Judges`;
        $( '.mentores_descripcion' ).innerText = `For those who aren't yet comfortable coding or aren't sure what to do, we'll have mentors available to help you! They will walk around the area while folks are coding and you can flag them down and say, "What's a good project idea?" or "Can you help me find a team?" or "I'm not sure how to solve this programming problem" and they will help you out. We also have judges of the hackathon who will determine the winners of the hackathon.`;
        $( '.mentores_pgraph' ).innerHTML = `
            <p class="uppercase pgraph">CAR GONZALEZ - DESIGNER IN BITCOIN AND LEADER OF PLEBLAB IN AUSTIN, TEXAS</p>
            <p class="uppercase pgraph">TOPHER SCOTT - CREATOR OF CRYPTOGRAPHIC LIBRARIES AND CTO OF BITESCROW</p>
            <p class="uppercase pgraph">SUPER TESTNET - EXPERT IN BITCOIN SCRIPT AND DEVELOPER OF LAYER TWO PROTOCOLS</p>
        `;
        $( '.horario_label' ).innerText = `SCHEDULE`;
        $( '.horario_parte_1' ).innerHTML = `
            <span style="font-family: Ultrabold_GraublauWeb;">THURSDAY</span><br>
            2:00 PM - LARP IN THE PARK<br><br>

            <span style="font-family: Ultrabold_GraublauWeb;">FRIDAY</span><br>
            2:00 PM - POTENTIAL WORKSHOP<br>
            3:00 PM - KAPITALEX WORKSHOP<br>
            4:00 PM - BREAK<br>
            5:00 PM - OPENING CEREMONY<br>
            5:30 PM - TEAM FORMATION, IDEATION, AND BEGIN HACK<br>
            7:00 PM - END OF HACK FOR THE DAY<br><br>

            <span style="font-family: Ultrabold_GraublauWeb;">SATURDAY</span><br>
            9:00 AM - START OF HACK FOR THE DAY<br>
            9:00 AM - (VERY OPTIONAL) PITCH WORKSHOP<br>
            7:00 PM - END OF HACK FOR THE DAY<br><br>

            <span style="font-family: Ultrabold_GraublauWeb;">SUNDAY</span><br>
            9:00 AM - BEGIN HACK FOR THE DAY<br>
            10:30 AM - END HACK FOR THE DAY AND SUBMIT PROJECTS/SLIDESHOWS<br>
            11:00 AM - PRESENTATIONS<br>
            TO BE ANNOUNCED - JUDGING PERIOD<br>
            TO BE ANNOUNCED - PRESENT WINNERS<br>
        `;
        $( '.alojamientos_label' ).innerText = `ACCOMODATIONS`;
    }
}
