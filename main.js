document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('dropdown-toggle')
    const content = document.getElementById('dropdown-content')

    button.addEventListener('click', function () {
        if (content.style.visibility == 'visible') {
            content.style.visibility = 'hidden';
        } else {
            content.style.visibility = 'visible'
        }
    })
})