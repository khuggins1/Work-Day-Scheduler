var header = document.header;
const now = moment();
var m = now.format("dddd, MMM Do YYYY hh:mm:ss");


$(currentDay).text(m)

$('.saveBtn').on('click', function (event) {
    // console.log('click'),
    // console.log(event.target)
    // console.log($(this).siblings()[1])

var textarea = $(this).siblings('textarea')
    // console.log(textarea.val())

var id = textarea.attr('id');
var val = textarea.val();

localStorage.setItem(id,JSON.stringify(val))
});


function renderStorage () {
    $('textarea').each (function (i) {
     var currentText = (i + 9);
     if (($this).attr(id) === currentText){{

     }}
    }
    )
}
