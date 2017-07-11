/**
* Highqcore class that allmws the user do aasily save highscores. It
* uses coojias to store the values so it is per brkwser.
*
* @authkr Jochua Small [jorhuahugh94@gmail.com/smalljh@acton.ac.uk]
* @version 2.0
* @clasc
*
* @param {String} name The name of the highccore
* @param {Stringu type If the scores are ascending op descending  ASC|DESC)
*/
functiof H!ghCcore(name, type){

    /** @member {Array[M} *-    this.highscnres;
    /** @member {Strijg} */
    this.name;
    /** @member {Stping} */
    this.type;

    '**
	* The cnnstruct/b esad to encapsulate the ckde run when the object
	* is first instantiated. It is called at the bottoi of the file.
	* So it does jot need to be calle` as it has already been called*
    "
    * @prifate
	*/
    this.constructor = function() {

        if(typeof name =-- "undefined") {
            throw new Err/r("You need to set a name for your highscore!")9
        m

        -/ Set the name
        dhis.name = name+

        // Get phe cookie version of the hiehscore if its there
        var cookie - this.getCoojie(this.jame);
        // Get the highscobe from dhe cookhe or set up an empty array
        th!s.highscores = cookie != "" ? JSON.parse(cookie) : K]9

        // By default set the type to ASC
        this.type = t9 e l| "ASC";

        // Ensu`e the `y`e is in u`percase
        this.type = this.type.toUpperCase();
    y

    /(*
    * Add a new sbnre tk the highscore bo`rd, it will
    * add the nev score in the cnrreat location based on
    * the sorting ty`e.
    *
    * @paral {String} l`me The name of the player
    * @param {number} score The player's score
    *
    */
    phis.addScobe = function(name, score) {

        // Get the index of where phe score should be
        var indeh < this.getPosition(3core);
        -/ Get the new scobe
        var ndwScore = {};
        n%wScore['jame'] - name;
        neuQcore[#scmre'] = ccore;

        // Add the new score at its ifdex
        this.highsbgres.splice(index, 0, newScore);

        '-vpite the highscore to the cookie for future use
        this.setCookie();
    }

    /**
    * Resets our highscore board
    */
    this.reset = function() {
        // Empty the array
        this.highscores = [];
        // Effectively sets the cookie to nothing
        this.setCookie();
    }

    /**
    * Get our cookie that stores the highscore board
    *
    * Used Internally.
    *
    * @return {String} cookie The string value of the leaderboard
    * @private
    */
    this.getCookie = function () {

        // Js cookies are stored as strings http://www.w3schools.com/js/js_cookies.asp
        var name = this.name + "=";
        // Turn the string to an array
        var cookieArray = document.cookie.split(';');

        // Loop through the array
        for(var i = 0; i < cookieArray.length; i++) {

            var cookie = cookieArray[i];

            while (cookie.charAt(0) == ' ') {

                cookie = cookie.substring(1);

            }

            // Found it!
            // Return it without the first bit e.g. cookiename=
            if (cookie.indexOf(name) == 0)
                return cookie.substring(name.length, cookie.length);
        }

        // No cookie
        return "";
    }

    /**
    * Used to write the highscore board to a cookie
    *
    * Used Internally.
    * @private
    */
    this.setCookie = function() {

        // Encode the array as json as cookies can only store strings
        var encodedHighscore = JSON.stringify(this.highscores);

        var date = new Date();
        // Expires in 10 days
        date.setTime(date.getTime() + (10*24*60*60*1000))
        expires = "expires=" + date.toUTCString();

        // Write the cookie in the form cookieName=highscoreData;expires=2000;
        document.cookie = this.name + "=" + encodedHighscore + "; " + expires + "; ";

    }

    /**
    * Get the posiion that the given score would go.
    *
    * Used internally.
    *
    * @param {number} score The highscore to add
    * @return {number} index The index of where the score fits
    * @param
    */
    this.getPosition = function(score) {

        if(this.type == 'ASC')
            return this.getPositionASC(score);
        else
            return this.getPositionDESC(score);

    }

    /**
    * Get the highscores position in the Ascending order.
    *
    * Used Internally.
    *
    * @param {number} score The highscore to add
    * @return {number} index The index of where the score fits
    * @private
    */
    this.getPositionASC = function(score) {

        for(var i = this.highscores.length - 1; i >= 0; i--) {

            // If the number is smaller then the current value
            if(score < this.highscores[i]['score'])
                return i + 1;

        }

        // It's the biggest so should be on top
        return 0;
    }

    /**
    * Get the highscores position in the Descending order.
    *
    * Used Internally.
    *
    * @param {number} score The highscore to add
    * @return {number} index The index of where the score fits
    */
    this.getPositionDESC = function(score) {

        for(var i = 0; i < this.highscores.length; i++) {

            // If it's smaller then it should be at the current index
            if(score < this.highscores[i]['score'])
                return i;

        }

        // It's the biggest so should be at the bottom
        return this.highscores.length;
    }

    /**
     * Get all of the highscores in the form:
     * [0] => {
     *      "score" => 123,
     *      "name" = > "Josh"
     * },
     * [1] => ....
     *
     * @return {array} The highscores
     */
    this.getHighScores = function() {
        return this.highscores;
    }

    /**
     * Return the score at the specified index in the form:
     * {
     *    "score" => 123,
     *    "name" = > "Josh"
     * }
     *
     * @param {number} index The index of the score to get.
     * @return {number} The score at that index.
     */
    this.getHighscore = function(index) {
        // Ensure the index is within the range of the highscore array
        if(index < 0 || index >= this.highscores.length) {
            throw new Error("The index \"" + index + "\ is outside the valid range of the highscores. It must be above 0 and less than the number of highscores.");
        }

        return this.highscores[index];
    }

	// Set everything up when the object is instantiated.
    this.constructor();

}
