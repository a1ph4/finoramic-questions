module.exports = { 
    //param A : array of strings
    //return an integer
       isValidSudoku : function(A){
           var arr = [];
           for(var i=0; i<A.length; i++){
               if(!this.checkRow(A[i].split(''))){
                   return 0
               }
               arr.push(A[i].split(''))
           }
           if(!this.checkColumn(arr)){
               return 0
           }
           if(!this.checkGroup(arr)){
               return 0
           }
               return 1    
           
       },
       checkColumn: function(arr){
           var carr = []
           var test = 1
           var j = 0
           while(test && j<9){
               for(var i=0; i<arr.length; i++){
                  carr.push(arr[i][j]) 
               }
               test = this.checkRow(carr)
               j++
           }
           return test
       },
       checkRow: function(arr){
           while(arr.length!=0){
               var ini = arr.pop()
               for(var i=0; i<arr.length; i++){
                  if(!isNaN(arr[i]) && arr[i] == ini){
                      return 0
                  } 
               }  
           }
       return 1
       },
       checkGroup: function(arr){
           var i=0
           var j=0
           var k=0
           var l=0
           var arrc =[]
           var test = 1
           while(test && l<9){
               for(k=0; k<9; k+=3){
                   for(i=l; i<l+3; i++){
                       for(j=k; j<k+3; j++){
                           arrc.push(arr[i][j])
                       }
                   }
                   test =  this.checkRow(arrc)
                   if(!test){
                       return test
                   }
                   arrc = []
               }
               l+=3
           }
           return test
       }
   };
   