axios.get(`https://boolean-teachers.github.io/mock/api/members/`)
  .then (response => {
    console.log(response.data);
    const cardSection = document.getElementById("card-section");

    // for (let index = 0; index < teamMembers.length; index++) {
    //   const{name, role, email, img}=teamMembers[index];
    //   cardSection.innerHTML +=
    //                 `<div class="col-12 col-md-6 col-xl-4 my-2">
    //                 <article class="d-flex bg-dark">
    //                         <div class="col-3">
    //                             <img class="img-fluid" src="./${img}" alt="member card picture">                        
    //                         </div>
    //                         <div class="d-flex col-9 flex-column justify-content-center">
    //                             <h2 class="team-name fw-bolder text-light mb-0 ms-3">${name.toLocaleUpperCase()}</h2>
    //                             <p class="team-role text-light  mb-0 ms-3">${role}</p>
    //                             <a class="team-mail fs text-info mb-0 ms-3" href="mailto:${email}">${email}</a>
    //                         </div>
    //                 </article>
    //             </div>`
    // }
  })
  .catch (error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finito il caricamento");
  })



// const teamMembers = [
//   {
//     name: "Marco Bianchi",
//     role: "Designer",
//     email: "marcobianchi@team.com",
//     img: "img/male1.png"
//   },
//   {
//     name: "Laura Rossi",
//     role: "Front-end Developer",
//     email: "laurarossi@team.com",
//     img: "img/female1.png"
//   },
//   {
//     name: "Giorgio Verdi",
//     role: "Back-end Developer",
//     email: "giorgioverdi@team.com",
//     img: "img/male2.png"
//   },
//   {
//     name: "Marta Ipsum",
//     role: "SEO Specialist",
//     email: "martarossi@team.com",
//     img: "img/female2.png"
//   },
//   {
//     name: "Roberto Lorem",
//     role: "SEO Specialist",
//     email: "robertolorem@team.com",
//     img: "img/male3.png"
//   },
//   {
//     name: "Daniela Amet",
//     role: "Analyst",
//     email: "danielaamet@team.com",
//     img: "img/female3.png"
//   }
// ];

