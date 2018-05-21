int powmod(int x, int n, int d) {
       long long int res = 1;
       if(x==0 || d==1){
           return 0;
       }
       if(n==0){
           return 1;
       }
       if(n%2==1){
           if(n==1){
               if(x<0){
                    res=(((res%d)*(x%d))%d); 
               }else{
                   res=(((x%d)*(x%d))%d);
               }
               
           }else{
            n=n-1;
            res=((((x%d)*(powmod(x,n,d))%d))%d);
           }
       }else{
           n=n/2;
           res=((((x%d)*(powmod(x,n,d))%d))%d);
       }
       if(res<0){
           return res+d;
       }
       return res;
	}