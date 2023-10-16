import{Q as a,P as c}from"./projects.4082f9d8.js";import{_ as r,a as i,b as _}from"./ProjectPageCard.54897a68.js";import{I as l}from"./InfoCard.68236eba.js";import{y as p,s as d,t as g,u as t,v as n,A as h,D as e,J as o}from"./index.b1f4baed.js";import"./dom.c92bec02.js";import"./QBtn.f68306b0.js";const m={class:"flex flex-center"},u=e("p",null,"This project was started sometime early 2020.",-1),f=e("p",null," PTPerfect is the projects name while in development and although it has a nice ring to it, it's a little ambiguous. ",-1),w=["sizes"],v=e("p",null," Five months after starting Ptperfect, For personal reasons it had to be shelved. ",-1),b=e("p",{class:"q-mb-none"},[e("strong",null,"2+ years later"),o(", I now have some spare time and I'm back to developing this project. ")],-1),y=["sizes"],x=e("p",null," Settling for the minimal viable product, Ptperfect will be invite only until client onboarding, appointment scheduling and integrated video chat are implemented. ",-1),z=e("p",null," Appointment Scheduling has been implemented, however due to a dependency being outdated, it has been benched for a time. ",-1),j=["sizes"],k=e("figcaption",null,"Invitation Email",-1),q=["sizes"],T=e("p",null," The ways in which we are able to move, when broken down into their simplest forms, are called Movement Patterns. ",-1),P=e("p",null," It is quite the complex subject but here is a tldr, some problems can be corrected by performing the right movement patterns in the right area of the body. ",-1),B=e("p",null," In relation to the rest of the application, Movement Patterns help the trainer categorize exercises, making it easier and faster to put together a regimen. ",-1),E=["sizes"],I=["sizes"],C=e("figcaption",null,"Equipment Show",-1),S=["sizes"],V=e("strong",null,"Report broken link",-1),A=["sizes"],R=e("p",null,"At the heart of the project are the exercises or Videos.",-1),L=e("p",null," This is from the trainers point of view. Clients will view video's through their current fortnights routines. ",-1),U=["sizes"],D=e("p",null," The content of each video will have detailed instructions on how to perform each exercise, for example, which muscles should be engaged. ",-1),N=e("p",null," A client will have the ability to attach questions to an exercise and to flag a Video as too easy or too hard. Their trainer will be able to respond to any questions and also regress or progress exercises to change the difficulty level. ",-1),W=e("figcaption",null,"Videos Show",-1),M=["sizes"],$=["sizes"],F=e("p",null," Blueprints have the soul purpose of being cloned onto clients regimens. Trainers can setup a blueprint for common problems and clone them onto a client who has a similar issue and then make adjustments. ",-1),H=e("p",null,"Blueprints can also be cloned onto other blueprints.",-1),Q=["sizes"],J=e("p",null,"* not yet redesigned.",-1),O=e("figcaption",null,"Blueprints Show",-1),G=["sizes"],K=e("p",null," A trainer can reorder the regimen for a client or blueprint and can transfer ownership(under revision). ",-1),X=e("p",null,"* Not yet redesigned.",-1),Y=["sizes"],Z=e("p",null," Blueprints simulate a Client without any of the events or notifications that would fire by directly editing a Client's Regimen. This red ",-1),ee=e("figcaption",null,"Blueprints Clone Selection",-1),te=["sizes"],se=e("figcaption",null,"Clone Selection Dialog",-1),ne=["sizes"],ie=e("figcaption",null,"Clone Edit",-1),oe=["sizes"],le=e("figcaption",null,"Edit Routine Dialog",-1),ae=["sizes"],ce=e("p",null," When editing a routine, a trainer has the ability to reorder, swap out videos, add and remove videos, override the default sets and reps, add additional instructions. Ontop of this they have the ability to change ownership and add instructions to the routine itself. ",-1),re=e("p",null," While it is only editing a single resource, this page is overly complicated and will need to be split up. ",-1),_e=e("p",null,"* not yet redesigned.",-1),pe=e("figcaption",null,"Routine Edit",-1),de=["sizes"],ge=e("p",null," While not representing the database in it's entirety, it helps illustrate the relations between Users and Blueprints and why it is possible to clone from Blueprints to Users. ",-1),he=e("figcaption",null,"Simplified DB Relations",-1),me=["sizes"],ue=e("figcaption",null,"Backend Tests",-1),fe=["sizes"],we=e("strong",null,"test driven development",-1),Pe=p({__name:"PTPerfectPage",setup(ve){return(be,ye)=>(d(),g(a,null,{default:t(()=>[n(r,{project:h(c)},null,8,["project"]),e("div",m,[n(i,null,{heading:t(()=>[o(" git init ")]),description:t(()=>[u,f]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/01-login_zjesup_c_scale,w_350.png   350w,
              images/ptperfect/01-login_zjesup_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/01-login_zjesup_c_scale,w_1000.png",alt:""},null,8,w)]),_:1}),n(l,null,{default:t(()=>[v,b]),_:1}),n(i,null,{description:t(()=>[o("The dashboard is very basic, once more or all of the trainers features have been implemented, the dash will be redesigned.")]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_350.png   350w,
              images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/02-trainer-dash_sptzdt_c_scale,w_1000.png",alt:""},null,8,y)]),_:1}),n(l,null,{default:t(()=>[o(" The tech industry moves fast, in the time this project was shelved, Laravel had managed to move 3 major releases ahead of Ptperfect. ")]),_:1}),n(i,null,{description:t(()=>[x,z]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/03-invite_toycih_c_scale,w_350.png   350w,
              images/ptperfect/03-invite_toycih_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/03-invite_toycih_c_scale,w_1000.png",alt:""},null,8,j)]),_:1}),n(l,null,{default:t(()=>[o(" Aside from having to migrate from Laravel 7 up to Laravel 10, a lot of the projects dependencies had become abandoned. ")]),_:1}),n(i,null,{description:t(()=>[o("Here we have a preview of the E-Mail sent to our friendly client asdasd. He will be asked to set a password to start using his account.")]),figure:t(({sizes:s})=>[k,e("img",{sizes:s,srcset:`
              images/ptperfect/04-email_moarkr_c_scale,w_350.png 350w,
              images/ptperfect/04-email_moarkr_c_scale,w_750.png 750w
            `,src:"images/ptperfect/04-email_moarkr_c_scale,w_750.png"},null,8,q)]),_:1}),n(l,null,{default:t(()=>[o(" Updating dependencies, finding alternatives and implementing my own solutions, it took quite some time. A valuable lesson in dependency management. ")]),_:1}),n(i,null,{description:t(()=>[T,P,B]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/06-movements_rznosq_c_scale,w_350.png   350w,
              images/ptperfect/06-movements_rznosq_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/06-movements_m5lxs9_c_scale,w_1000.png",alt:""},null,8,E)]),_:1}),n(i,null,{description:t(()=>[o(" Each exercise may need some Equipment, clients will be warned in advance of upcoming equipment requirements so that they have enough time to acquire them. ")]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_350.png   350w,
              images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/07-equipment-index_jf5ytn_c_scale,w_1000.png",alt:""},null,8,I)]),_:1}),n(i,null,{description:t(()=>[o("Each Equipment has URLs attached to them, assisting the clients to identify what the item is and possible online vendors.")]),figure:t(({sizes:s})=>[C,e("img",{sizes:s,srcset:`
              images/ptperfect/08-equipment-show_mtdksv_c_scale,w_350.png   350w,
              images/ptperfect/08-equipment-show_mtdksv_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/08-equipment-show_mtdksv_c_scale,w_1000.png",alt:""},null,8,S)]),_:1}),n(l,null,{default:t(()=>[o(" A "),V,o(" button is a planned feature. ")]),_:1}),n(i,null,{figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_350.png   350w,
              images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/09-equipment-edit_nh8fsl_c_scale,w_1000.png",alt:""},null,8,A)]),_:1}),n(i,null,{description:t(()=>[R,L]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_350.png   350w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_559.png   559w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_724.png   724w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_871.png   871w,
              images/ptperfect/10-videos-index_h3ojuu_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/10-videos-index_h3ojuu_c_scale,w_1000.png",alt:""},null,8,U)]),_:1}),n(l,null,{default:t(()=>[o(" These fake images are generated when from a list of youtube video thumbnails, they are of course, not the final product. ")]),_:1}),n(i,null,{description:t(()=>[D,N]),figure:t(({sizes:s})=>[W,e("img",{sizes:s,srcset:`
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_350.png   350w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_563.png   563w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_726.png   726w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_879.png   879w,
              images/ptperfect/11-videos-show_nxqxw6_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/11-videos-show_nxqxw6_c_scale,w_1000.png",alt:""},null,8,M)]),_:1}),n(i,null,{figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/12-videos-edit_r3bcct_c_scale,w_350.png   350w,
              images/ptperfect/12-videos-edit_r3bcct_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/12-videos-edit_r3bcct_c_scale,w_1000.png",alt:""},null,8,$)]),_:1}),n(i,null,{description:t(()=>[F,H]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_350.png   350w,
              images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/13-blueprints-index_gvfhss_c_scale,w_1000.png",alt:""},null,8,Q)]),_:1}),n(i,null,{description:t(()=>[J]),figure:t(({sizes:s})=>[O,e("img",{sizes:s,srcset:`
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_350.png   350w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_582.png   582w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_755.png   755w,
              images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/14-blueprints-show_mfe05r_c_scale,w_1000.png",alt:""},null,8,G)]),_:1}),n(i,null,{description:t(()=>[K,X]),figure:t(({sizes:s})=>[e("img",{sizes:s,srcset:`
              images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_350.png   350w,
              images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/15-regimens-edit_rhllxv_c_scale,w_1000.png",alt:""},null,8,Y)]),_:1}),n(i,null,{description:t(()=>[Z]),figure:t(({sizes:s})=>[ee,e("img",{sizes:s,srcset:`
              images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_350.png   350w,
              images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/16-blueprints-clone-show_lawyct_c_scale,w_1000.png",alt:""},null,8,te)]),_:1}),n(i,null,{figure:t(({sizes:s})=>[se,e("img",{sizes:s,srcset:`
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_350.png   350w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_830.png   830w,
              images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/17-blueprints-clone-show-dialog_yn8omn_c_scale,w_1000.png",alt:""},null,8,ne)]),_:1}),n(i,null,{description:t(()=>[o("Still fixing the broken UI after migrating 3 version of Laravel")]),figure:t(({sizes:s})=>[ie,e("img",{sizes:s,srcset:`
              images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_350.png   350w,
              images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/18-blueprints-clone-edit_exsddg_c_scale,w_1000.png",alt:""},null,8,oe)]),_:1}),n(i,null,{description:t(()=>[o("Each Program (or fortnight) has 2 Routines attached and are meant to be alternated each day. When a Trainer selects Edit on a Program, they get the option of which routine they want to edit.")]),figure:t(({sizes:s})=>[le,e("img",{sizes:s,srcset:`
              images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_350.png   350w,
              images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/19-regimen-show-dialog_z3kfsv_c_scale,w_1000.png",alt:""},null,8,ae)]),_:1}),n(i,null,{description:t(()=>[ce,re,_e]),figure:t(({sizes:s})=>[pe,e("img",{sizes:s,srcset:`
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_350.png   350w,
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_644.png   644w,
              images/ptperfect/20-routine-edit_jasal9_c_scale,w_1000.png 1000w
            `,src:"images/ptperfect/20-routine-edit_jasal9_c_scale,w_1000.png",alt:""},null,8,de)]),_:1}),n(i,null,{description:t(()=>[ge]),figure:t(({sizes:s})=>[he,e("img",{sizes:s,srcset:`
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_200.jpg 200w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_457.jpg 457w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_656.jpg 656w,
              images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_667.jpg 667w
            `,src:"images/ptperfect/ptperfect_relations_simplified_bdsdk3_c_scale,w_667.jpg",alt:""},null,8,me)]),_:1}),n(i,null,{description:t(()=>[o("The incomplete tests are related to client onboarding, which is not yet implemented. They are there to help remind which feature/'s I'm up to implementing.")]),figure:t(({sizes:s})=>[ue,e("img",{sizes:s,src:"images/ptperfect/21-tests_lyug0p.png",alt:""},null,8,fe)]),_:1}),n(l,null,{default:t(()=>[o(" The backend was built using "),we,o(", however the Vue 2 frontend was not. I am planning to implement tests around the frontend as I migrate to Vue 3 using Vitest. ")]),_:1}),n(_,{label:"Index Page"})])]),_:1}))}});export{Pe as default};
