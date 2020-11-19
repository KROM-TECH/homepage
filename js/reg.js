setTimeout(form, 7000)

const view = document.querySelector('.view')

function form() {
  view.innerHTML = `
    <form action="" name="submit-to-google-sheet" style="padding: 10%;" class="fadeRight">
    <div>
      <label for="name">Name</label>
      <input id="name" name="Name" type="text" placeholder="Enter Your Full Name" required />
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" name="Email" type="email" placeholder="Enter Your Email" required />
    </div>

    <div>
      <label for="phone">Phone Num</label>
      <input id="phone" name="Phone" type="text" placeholder="WhatsApp Prefered" required />
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">University</label>
      <select name="University" required style="display: block;">
        <option value="" disabled selected>Select Your University</option>
        <option value="Unilag">University of Lagos</option>
      </select>
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">Faculty</label>
      <select name="Faculty" required style="display: block;">
        <option value="" disabled selected>Select Your Faculty</option>
        <option value="Arts">Arts</option>
        <option value="Education">Education</option>
        <option value="Engineering">Engineering</option>
        <option value="Environmental science">Environmental science</option>
        <option value="Law">Law</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Science">Science</option>
        <option value="Social Science">Social Science</option>
      </select>
    </div>

    <div>
      <label for="dept">Department</label>
      <input id="dept" name="Department" type="text" placeholder="Enter Your Department" required />
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">Group</label>
      <select name="Group" id="group" required style="display: block;">
        <option value="" disabled selected>Select Your Group</option>
        <option value="Dev">Developers</option>
        <option value="Aca">Academics</option>
        <option value="Com">Community</option>
      </select>
    </div>

    <div class="dev" style="display:none;">
          <div style=" margin-bottom: 8px;">
            <label for="">track</label>
            <select name="Track" id="track" style="display: block;">
              <option value="" disabled selected>Select Your Track</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
          
          <div>
            <label for="dept">Github URL</label>
            <input name="Github" id="dept" type="text" placeholder="Optional"/>
          </div>
    </div>

    <div class="container center">
      <button type='submit' id='btn' class="btn purple wave wave-light" style="margin-top: 50px;">Submit</button>
    </div>



  </form>
  `

  control()
}

function control() {
  document.getElementById('group').addEventListener('change', (e) => {
    if (e.target.value == 'Dev') {
      document.querySelector('.dev').style.display = 'block'
    } else {
      document.querySelector('.dev').style.display = 'none'
    }
  })

  const form = document.forms['submit-to-google-sheet']
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyZQwmc5BwXCDM8tlR5MU1bkN7-2tcSIiKctGQHjdJ0xJECo7HM/exec'

  form.addEventListener('submit', e => {
    e.preventDefault()
    document.querySelector('#btn').disabled = true;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => { formSubmit() })
      .catch(error => alert('Error!', error.message))
  })
}

function formSubmit() {
  view.innerHTML = `
   <div>
  <h3 style="text-align: center; margin-top:40vh;">
    Form Submitted <br>
      Navigating to Home Page <br>
        ...
  </h3>
</div>
  `
  setTimeout(redir, 3000)
}

 function redir () {
  window.location.assign('./index.html')
}
