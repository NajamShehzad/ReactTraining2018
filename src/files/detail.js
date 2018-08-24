export var heading = ['1)Event= this.FunctionName:', '2)Event= () => {this.FucntionName()}:', '3)Event = FunctionName.bind(this):'];
export var detail = [
  "Whenever we use this type of function with any event it call with its calling object 'this' & if we want to use the 'this' scope of component then we have to bind the calling fucntion with this in constructor ",
  "By Using Arrow Function in our Event we Can have the scope of Main Component because arrow fucntion didnt take the scope of its calling object",
  "By Binding The Event Function with this right after the event we can have the scope of Main Component so after that we have no need to again bind the fucntion with 'this' in Constructor "
];