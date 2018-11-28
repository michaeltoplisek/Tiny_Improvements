
const displayKudos = function () {
    $.get('/api/kudo').then(function (data) {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
        $('#kudosDump').append(`
    <div class="card p-2" style="width: 18rem;">
    <h2>${data[i].title}</h2>
    <h3>From: ${data[i].Sender[0].name}</h3>
    <hr />
    <h4>To: ${data[i].Receiver[0].name}</h4>
    <p>${data[i].body}</p>
    </div>`)
    }})
}
displayKudos()

$('#giveKudo').on('click', function (e) {
    e.preventDefault()
    const newKudo = {
        title: $('#kudoTitle').val(),
        body: $('#kudoBody').val(),
        Sender: $('#sender').val(),
        Receiver: $('#receiver').val()
    }
    $.post('/api/kudo', newKudo)
        .then(function (data) {
            displayKudos();
        })
})