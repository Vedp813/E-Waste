const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
// setup guides
const setupGuides = (data) => {

    if(data.length){
  let html = '';
  data.forEach(doc => {
    const guide = doc.data();
  
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${guide.Name} </div>
        <div class="collapsible-body white"> ${guide.Address} </div>
        <div class="collapsible-body white"> ${guide.Phone} </div>
        <div class="collapsible-body white"> ${guide.image} </div>
      </li>

    `;
    html += li;
  });
  guideList.innerHTML = html;
 } else{
     let html = '';
     guideList.innerHTML = '<h5 class="center-align">Login to view</h5>'
 }

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});

