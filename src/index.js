function MaiorFatorPrimo(number){
    let primosEFatores = []
    for(let x = 0; x <= number; x++){
        let éUmFator = number % x == 0
        let éPrimo = true

        if(éUmFator){
            for(let i = 2; i < x; i++){
                if(x % i ==0){
                    éPrimo = false
                    continue;
                }
            }
        }
        if(éUmFator && éPrimo){
            primosEFatores.push(x)
        }
    }
   console.log(primosEFatores.pop()); 
}
MaiorFatorPrimo(600851475143);


