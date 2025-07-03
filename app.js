/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let x,y, operator


/*------------------------ Cached Element References ------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display")
display.innerText="0"
/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
 handleClick(event)
});

/*-------------------------------- Functions --------------------------------*/

function handleClick (event) 
{
    if(event.target.classList.contains('button'))
    {
        if(x && y && operator && event.target.classList.contains('operator')&& event.target.innerText!=="=" && event.target.innerText!=="C")
        {
            x=y;
            y =null;
            operator=event.target.innerText
        }
            if (event.target.classList.contains('number')) 
            {
                if(!x)
                {
                    x=Number(event.target.innerText)
                    display.innerText=`${x}`
                    // console.log("x= "+x)
                }
                else 
                {
                    if(!operator)
                    {
                        x=10*x+Number(event.target.innerText)
                        display.innerText=`${x}`
                        // console.log("x= "+x)
                    }
                    else 
                    {
                        if(!y)
                        {
                            y=Number(event.target.innerText)
                            display.innerText=`${y}`
                            // console.log("y= "+y)
                        }
                        else
                        {
                            y=10*y+Number(event.target.innerText)
                            display.innerText=`${y}`
                            // console.log("y= "+y)
                        }
                    }  
                }
    
            }
            else 
            { 
                if(x && event.target.innerText!=="=" && event.target.innerText!=="C")
                {
                    operator=event.target.innerText
                    display.innerText="0"
                    // console.log("operator= "+operator)
                }
                else if(event.target.innerText==="=" && x && y && operator)
                {
                    calculate()
                }
    
            }


  
        if(event.target.innerText === 'C')
        {
            clearAll()
            // console.log(x,y,operator)
        }
    }
}


function clearAll() 
{
    x=null
    y=null
    operator=null 
    display.innerText=`0`
}


function calculate () 
{
    // console.log(`${x}${operator}${y}`)
    switch (operator)
    {
        case "+":

            display.innerText=`${x+y}`
            y=x+y 
            break;

        case "-":

            display.innerText=`${x-y}`
            y=x-y  
            break;

        case "/":

            display.innerText=`${x/y}`
            y=x/y
            break;
        case "*":

            display.innerText=`${x*y}`
            y=x*y
            break;

        default:

            console.log("defualt case triggered")
    }

}