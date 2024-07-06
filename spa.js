function changeContent(page) {
    var contentDiv = document.getElementById('content');
 
    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
            <marquee scrollamount="10" direction="right" bgcolor="pink" behavior="scroll"><img src="food.jpg"></marquee>
                <p>
                    Explore the different sections using
                    the navigation menu.
                </p>
            `;
            break;
            case 'menu':
                contentDiv.innerHTML = `
                    <h2>Menu with us</h2>
                    <p>
                        This is the about page content. Learn more 
                        about our purpose and team.
                    </p>
                    <marquee scrollamount="10" direction="right" bgcolor="pink" behavior="scroll"><img src="food2.jpg"></marquee>
<marquee scrollamount="10" direction="left" bgcolor="pink" behavior="scroll"><img src="food3.jpg"></marquee>
<marquee scrollamount="10" direction="right" bgcolor="pink" behavior="scroll"><img src="food4.jpg"></marquee>
                `;
                break;
                case 'contact':
            contentDiv.innerHTML = 
                `<h2>Contact Us</h2> 
                <p>
                    Feel free to reach out to us!
                </p> 
                <form> 
                   <label for="name">Name:</label> 
                   <input type="text" id="name" name="name" 
                          placeholder="Your Name" required>
                   <label for="email">Email:</label> 
                   <input type="email" id="email" name="email" 
                          placeholder="Your Email" required>
                   <label for="message">Message:</label> 
                   <textarea id="message" name="message" 
                             placeholder="Your Message" 
                             rows="4" required>
                    </textarea>
                   <button type="submit">Send Message</button> 
                </form>`;
            break;
            default:
                contentDiv.innerHTML = '<h2>Page not found!</h2>';
        }
    }