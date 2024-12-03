$( '.title_and_subtitle' ).onclick = () => {window.location.href = './';}
$( '.lang_btn' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?lang=english";}
if ( window.location.href.includes( "lang=english" ) ) {
    $( '.title_and_subtitle' ).onclick = () => {window.location.href = './' + "?lang=english";}
    $( '.subtitle' ).innerText = `Friday November 29 - Sunday December 1, 2024`;
    $( '.lang_btn span' ).innerText = `Español`;
    $( '.lang_btn' ).onclick = () => {window.location.href = window.location.protocol + "//" + window.location.hostname + window.location.pathname;}

    // translation logic
    var idx = window.location.pathname.lastIndexOf( "/" );
    var page_were_on = window.location.pathname.substring( idx + 1 );
    if ( page_were_on === "blog.html" ) {
      $( '.post_contents' ).innerHTML = `
          <h1>
              4 Champions: How Super Testnet Hallucinated a Defeat During Hackalajara
          </h1>
          <p>
              Last weekend, six teams competed for the victory at Hackalajara, the first bitcoin hackathon in Guadalajara. The judges were Gustavo Echaiz from Swapido, Carlos Chida from Yopaki, and me, Super Testnet, independent. I am happy to reveal the winners of our three categories:
          </p>
          <ul>
              <li>Programming, BTC BLOCK in VR [<a href="https://www.youtube.com/watch?v=CU3DgKNFWP4&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=3" target="_blank">video</a>]</li>
              <li>Design, Pleb Improvement Proposal [<a href="https://www.youtube.com/watch?v=m66TpJcyf6A&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=5" target="_blank">video</a>]</li>
              <li>Education, Aprendiz de Satoshi [Apprentice of Satoshi] [<a href="https://www.youtube.com/watch?v=LLl_TNVMtLU&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=2" target="_blank">video</a>]</li>
          </ul>
          <p>
              And, due to an injustice committed by me, and which I will explain in more detail in this document, I choose this opportunity to advance one more team to equality with the other winners:
          </p>
          <ul>
              <li>Prompt Pay (category: Programming) [<a href="https://www.youtube.com/watch?v=OnuB3HrbBoM&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=6" target="_blank">video</a>]</li>
          </ul>
          <p>
              The other competitors are:
          </p>
          <ul>
              <li>Ahorrabit [Save-a-bit] [<a href="https://www.youtube.com/watch?v=b9cEpG-AdjY&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=1" target="_blank">video</a>]</li>
              <li>Club Bink [<a href="https://www.youtube.com/watch?v=RIGuozwGpEU&list=PLxCILFSTir7SbRNL18V4BU89Gcfh9dpNN&index=4" target="_blank">video</a>]</li>
          </ul>
          <p>
              I want to give thanks to each team for their contributions to our hackathon. I think bitcoin will benefit from each project, and I am excited that the participants enjoyed the hackathon and learned a lot. Each team earned 1.3 million satoshis, valued at more than 25,000 MXN (1200 USD), and 200 USD in gift cards from one of our sponsors, Bitrefill.
          </p>
          <p>
              Thanks to our sponsors that provided the money for the gifts and our other expenses, and thanks to Pleblab for helping with this hackathon.
          </p>
          <h2>
              The Hallucination
          </h2>
          <p>
              During the presentation by Prompt Pay, I thought that I watched while the team showed six commands on the linux terminal that did not work. I thought the presenter entered a command, and nothing happened, and another, and nothing happened, and another, and another. And I was sad, because their project was very interesting: they tried to show that you can use bolt12 to pay subscriptions in bitcoin – and easy subscriptions, to me, are a “holy grail” of bitcoin programming. I do not know why I saw this false story; you can see that each command worked, except one, and that only didn’t work because they showed it to explain a problem they encountered early in their project, and which they fixed later.
          </p>
          <p>
              During the judging period, for the category of Programming, two camps emerged: one judge wanted to give the prize to BTC BLOCK in VR, and another wanted to give the prize to Prompt Pay. The decision was mine. And I decided to give the prize to BTC BLOCK in VR, because their project worked, while the one by Prompt Pay (I thought) did not work.
          </p>
          <p>
              We already announced this decision at the end of the hackathon, and now I announce our decision to the world. After the announcement, one of the mentors of our hackathon asked me about the decision, and I explained: “I was sad because, during the presentation by Prompt Pay, all of the commands in the terminal didn’t work.” And he said: “What are you talking about? They all worked.” And I showed him a video of the presentation on my cell phone, to indicate the problem; and, to my surprise, I could see, this time, that the commands worked perfectly well! Each command did what they intended.
          </p>
          <p>
              And that is why there is a problem: I gave the Programming prize to a very worthy team, but now I believe that another team earned it too. Prompt Pay did not lose the prize through their own fault, but through my fault. I cannot fix the problem completely; it is a problem that I need to say here, after the competition, to the ears of the winner BTC BLOCK in VR, that another team, in my opinion, earned their prize. And in order to fix this problem as best I can, I give my congratulations to BTC BLOCK in VR; they are worthy of the prize. But in order to fix the other mistake, I give from my own wallet the same value of the prize to Prompt Pay. I give 0.013 BTC and 200 USD in gift cards from Bitrefill. And for this reason it is like there were 4 winners of our hackathon; the official winners, listed above, and Prompt Pay, who also earned an equal prize, in my opinion.
          </p>
          <p>
              And through this document, I advance the Prompt Pay team to equality with the other winners.
          </p>
      `;
    }
}
