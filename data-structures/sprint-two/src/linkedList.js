var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
   var newTail = Node(value);

   if(!list.head) {
    list.head = newTail;
   }
   if(list.tail) {
    list.tail.next = newTail;
   }

   list.tail = newTail;

  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
