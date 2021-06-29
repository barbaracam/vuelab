    // This project was made with the support and help from   
    // Souce: https://www.youtube.com/watch?v=rqb4FgVNrrM
    // https://www.youtube.com/watch?v=0ShYlN-H-ak
    // https://www.youtube.com/watch?v=R78cMs75P7E&t=523s
    // Variables were changed and some part of the code
    // The project is no completly working and finished


    // <!-- The X and O Game -->
    class tiktok {
        constructor() {
            // Tik tok started and havent ended
            this.started = true;

            // Who is the next 0 or X, but the rules in tik tok implies O being the first one
            this.next = tiktok.player1;

            //Number of move made 
            this.turn = 0;

            //Who won?
            this.win = null;
            
            //square on the board          
            this.tables = new Array(9).fill().map( t => new Table() );
        }

            //Create a method to switch between players (Making move)
            whoturn(i) {
                //If the game started and the spot in the table does not have a mark, then it will display what the player1 is requesting
                if (this.started && !this.tables[i].value) {
                    this.tables[i].value = this.next;
                    
                    //Check if it is already a winning move and amount of moves
                    this.turn++;
                    this.whowin();
                    this.next = (this.next === tiktok.player1) ? tiktok.player2 : tiktok.player1;
                }
            }

            whowin() {
             //potential winning combinations
                const winning = [
                    [0,1,2],
                    [2,5,8],
                    [0,4,8],
                    [3,4,5],                    
                    [1,4,7],
                    [6,7,8],
                    [0,3,6],
                    [2,4,6]
                ];

                // Calling winning combinations, the board knows when to stop 
                winning.forEach((winn) => {
                    const [a,b,c] = winn; //separating the array in 3
                    const tbA = this.tables[a];
                    const tbB = this.tables[b];
                    const tbC = this.tables[c];

                    if(tbA.value && tbA.value === tbB.value && tbA.value === tbC.value){
                        this.started = false; //game finished
                        this.win = tbA.value; 
                        // this.marked = tbB.marked = tbC.marked = true;

                        
                        //Missing the fuction in case nobody wins
                }

            });

        }

    }


    // Properties to the game, we have two players one will represent 0 another X
    tiktok.player1 = "O";
    tiktok.player2 = "X";
    

    
    