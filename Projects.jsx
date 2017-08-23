import React from 'react';

class Projects extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div id="q1Project">
              <p>
                For my first quarter project at Galvanize on Pearl St., I created an app called <a href="http://drinktodinner.surge.sh" target="_blank" rel="noopener noreferrer">Drink to Dinner</a> that allows users to input a drink of choice and search recipes that
                pair well with their drink. To do this I used Foodpairing API to find ingredients that pair well with the selected drink.
              </p>
              <img src="../images/q11.png" alt="Drink to Dinner splash page" />
              <p>
                Originally, I wanted them to search recipes based only on what they were drinking; however, I quickly realized that this would not return results consistently. To fix this problem, I had to research basic food and drink pairings and let the user choose
                from a few base ingredients. I used an AJAX call to send that ingredient’s i.d. number to the Foodparing API, which responded with a list of ingredients that pair well with the original choice.
              </p>
              <img src="../images/q12.png" alt="Drink to Dinner ingredient selection" />
              <p>
                Using jQuery and Bootstrap 4, I dynamically created the page based on the user’s search. The user can now select ingredients by clicking on cards that have the item name and picture. Once they have selected a few ingredients to use in their meal, they
                can search for recipes. I sent AJAX calls to both Yummly API and Food2Fork API with the user’s search queries.
              </p>
              <img src="../images/q13.png" alt="Drink to Dinner recipes" />
              <p>
                I used the responses to dynamically create a list of recipes that have all, or at least some of the ingredients the user searched for. Clicking on the links to the recipes opens a modal window with an iframe linking to each recipe at the API’s website.
                This allows the user to see the recipe before leaving the page and deciding to make that recipe.
              </p>
              <img src="../images/q14.png" alt="Drink to Dinner recipe modals" />
              <br />
              <h3><a href="http://drinktodinner.surge.sh" target="_blank" rel="noopener noreferrer"><i className="fa fa-cutlery"></i>Drink to Dinner</a></h3>
              <br />
          </div>
          <div id="q2Project">
              <p>
                <a href="https://jump-note.herokuapp.com" target="_blank" rel="noopener noreferrer">JumpNote</a> is an application that lets you take notes while watching videos. Every note is timestamped so you can easily jump back to that moment when you made the note. Type along to lectures or live streams, then share those notes and videos with a classmate or friend.
              </p>
              <p>
                First, create an account or log in to see your profile page where you will find any videos you have taken notes on, or that have been shared.
              </p>
              <img src="../images/jump_note_login.png" alt="The login in page for JumpNote" />
              <p>
                Your profile page allows you to search Youtube for videos, see videos you have already taken notes on, and see videos that other users have decided to share publicly.
              </p>
              <img src="../images/jump_note_profile.png" alt="JumpNote profile page with your videos" />
              <p>
                Any notes you take are timestamped and tied to specific parts of the video, allowing you to quickly see that section of the video. While taking notes you are able to bold, italicize, highlight, change font size and change other options to style the notes as you want.  All the notes are saved automatically every time you create a new line.
              </p>
              <img src="../images/jump_note_notes.png" alt="The notetaking page" />
              <p>
                You can learn more about the team behind JumpNote, and see their Github and LinkedIn or send them an email.
              </p>
              <img src="../images/jump_note_about.png" alt="The about page for JumpNote" />
              <br />
              <h3><a href="http://drinktodinner.surge.sh" target="_blank" rel="noopener noreferrer"><img src="../images/tabpen.png" alt="JumpNote logo" height="30" />JumpNote</a></h3>
            </div>
      </div>
    );
  }
}

export default Projects;
