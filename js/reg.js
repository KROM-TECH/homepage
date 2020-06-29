setTimeout(form, 7000)

const view = document.querySelector('.view')

function form() {
  view.innerHTML = `
    <form action="" style="padding: 10%;" class="fadeRight">
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" placeholder="Enter Your Full Name" required />
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="Enter Your Email" required />
    </div>

    <div>
      <label for="phone">Phone Num</label>
      <input id="phone" type="text" placeholder="WhatsApp Prefered" required />
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">University</label>
      <select required style="display: block;">
        <option value="" disabled selected>Select Your University</option>
        <option value="Unilag">University of Lagos</option>
      </select>
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">Faculty</label>
      <select required style="display: block;">
        <option value="" disabled selected>Select Your Faculty</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </div>

    <div>
      <label for="dept">Department</label>
      <input id="dept" type="text" placeholder="Enter Your Department" required />
    </div>

    <div style=" margin-bottom: 8px;">
      <label for="">Group</label>
      <select id="group" required style="display: block;">
        <option value="" disabled selected>Select Your Group</option>
        <option value="Dev">Developers</option>
        <option value="Aca">Academics</option>
        <option value="Com">Community</option>
      </select>
    </div>

    <div class="dev" style="display:none;">
          <div style=" margin-bottom: 8px;">
            <label for="">track</label>
            <select id="track" required style="display: block;">
              <option value="" disabled selected>Select Your Track</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
          
          <div>
            <label for="dept">Github URL</label>
            <input id="dept" type="text" placeholder="Optional"/>
          </div>
    </div>

    <div class="container center">
      <button type='submit' class="btn purple wave wave-light" style="margin-top: 50px;">Submit</button>
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
}