
// $.get("https://swapi.dev/api/people", lesPersonnages => {
//     for(let i in lesPersonnages) {
//         lesPersonnages[i];
//     }
// });

// $("#people").click(() => {
//     $.get("https://swapi.dev/api/people", lesPersonnages => {

//         for(let i in lesPersonnages) {
//             lesPersonnages[i];
//             console.log(lesPersonnages);
//         }
//     });
// })

let liste = $("#liste")

$(".menu button").click((e) =>{
    liste.html("");
    $.get("https://swapi.dev/api/" + e.target.id, callBack)
});
function callBack(settings) {
    for(let i = 0; i < settings.results.length; i++) {
        console.log(settings.results[i].name);
        $("<a href='"+settings.results[i].url+"'>"+settings.results[i].name+"</a><br>").appendTo(liste);
    }
}