$( '.title_and_subtitle' ).onclick = () => {window.location.href = './';}
$( '.lang_btn_1' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?lang=english";}
$( '.lang_btn_2' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?lang=english";}
$( '.mentores_btn' ).onclick = () => {window.location.href = "./mentores.html";}
$( '.larp_btn' ).onclick = () => {window.open( "https://www.base58.info/classes/larp", "_blank" );}
$( '.horario_btn' ).onclick = () => {window.location.href = "./horario.html";}
$( '.contacto_btn' ).onclick = () => {window.location.href = "./contacto.html";}
if ( window.location.href.includes( "lang=english" ) ) {
    $( '.title_and_subtitle' ).onclick = () => {window.location.href = './' + "?lang=english";}
    $( '.subtitle' ).innerText = `Friday November 29 - Sunday December 1, 2024`;
    $( '.lang_btn_1 span' ).innerText = `Español`;
    $( '.lang_btn_1' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;}
    $( '.lang_btn_2 span' ).innerText = `Español`;
    $( '.lang_btn_2' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;}
    $( '.mentores_btn span' ).innerText = `Mentors`;
    $( '.mentores_btn' ).onclick = () => {window.location.href = "./mentores.html?lang=english";}
    $( '.horario_btn span' ).innerText = `Schedule`;
    $( '.horario_btn' ).onclick = () => {window.location.href = "./horario.html?lang=english";}
    $( '.contacto_btn span' ).innerText = `Contact`;
    $( '.contacto_btn' ).onclick = () => {window.location.href = "./contacto.html?lang=english";}
    // bitcoin address generation logic
    

    // translation logic
    var idx = window.location.pathname.lastIndexOf( "/" );
    var page_were_on = window.location.pathname.substring( idx + 1 );
    if ( page_were_on === "" ) {
        $( '.que_es_label' ).innerText = `What is it?`;
        $( '.que_es_descripcion' ).innerText = `Come to the first bitcoin-focused hackathon in Guadalajara, Mexico! Have an idea for how to improve bitcoin? Want to meet other bitcoiners and hack something out? Join us and help make the dream of sound, digital money come true!`;
        $( '.donde_es_label' ).innerText = `Where is it?`;
        $( '.categorias_label' ).innerText = `Prize categories`;
        $( '.categorias' ).innerHTML = `
            <li>Best programming hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</li>
            <li>Best design hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</li>
            <li>Best education hack - prize of 0.013 BTC (valued at $18,500 MXN currently)</li>
        `;
        $( '.categorias_descripcion' ).innerText = ``;
        $( '.registrarse_btn span' ).innerText = `Register here`;
    }
    if ( page_were_on === "mentores.html" ) {
        $( '.mentores_label' ).innerText = `Mentors`;
        $( '.mentores_descripcion' ).innerText = `For those who aren't yet comfortable coding or aren't sure what to do, we'll have mentors available to help you! They will walk around the area while folks are coding and you can flag them down and say, "What's a good project idea?" or "Can you help me find a team?" or "I'm not sure how to solve this programming problem" and they will help you out. Confirmed mentors so far include:`;
        $( '.mentores_ul' ).innerHTML = `
            <li>Chris Guida - expert in Core Lightning and Bitcoin Core node management</li>
            <li>Super Testnet - expert in bitcoin script and layer two protocol development</li>
            <li>More mentors to be announced later</li>
        `;
    }
    if ( page_were_on === "horario.html" ) {
        $( '.horario_label' ).innerText = `SCHEDULE`;
        $( '.horario_parte_1' ).innerHTML = `
            <span style="font-family: Ultrabold_GraublauWeb;">FRIDAY</span><br>
            2:00 PM - POTENTIAL WORKSHOP<br>
            3:00 PM - KAPITALEX WORKSHOP<br>
        `;
        $( '.horario_ul' ).innerHTML = ``;
        $( '.horario_parte_2' ).innerHTML = `
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
    }
    if ( page_were_on === "contacto.html" ) {
        $( '.donaciones_label' ).innerText = `Donations`;
        $( '.apoyos' ).innerHTML = `
        <p>Sponsorship supports</p>
        <ul>
            <li>Prize Money Hackthon (3 categories)</li>
            <li>Local Bitcoin and LN Developers</li>
            <li>Venue and Facilities</li>
            <li>Travel Grants</li>
            <li>Stipdends for Devs from other communities in Mexico</li>
        </ul>
        `;
        $( '.contacto_label' ).innerText = `Contact`;
        $( '.contacto_ul' ).innerHTML = `
        <li><a href="https://twitter.com/super_testnet" target="_blank">@super_testnet</a> on twitter</li>
        <li><a href="https://t.me/supertestnet" target="_blank">@supertestnet</a> on telegram</li>
        <li><a href="https://njump.me/nprofile1qy88wumn8ghj7mn0wvhxcmmv9uq32amnwvaz7tmwdaehgu3wdau8gu3wv3jhvtcpz4mhxue69uhhyetvv9ujumn0wd68ytnzvuhsqgpps055wkzgr583ynaaj0zkej4ytel9gh8whr2jsj8esfflf9aew5p96hus" target="_blank">Super Testnet</a> on nostr</li>
        <li><a href="https://www.youtube.com/@highlevelbitcoin" target="_blank">High Level Bitcoin</a> on youtube</li>
        `;
    }
}
