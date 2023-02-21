module.exports= {

    // CALCULATIONS
    
    //Calculer le nombre d'assenceurs requis
     calcResidentialElev(numFloors, numApts) {    
        if (numApts < 6) return 0;
        else {
          let elevatorsRequired = Math.round((numApts /numFloors) / 6);
          if (numFloors>= 20) return elevatorsRequired * 2;
          else return elevatorsRequired;
        }
        
    },
     
    
    //Calculer le prix total
    calculatTTP(numApts, numFloors, niveau, elevatorsRequired)
    { 
        try{
            //tout d'abord on vérifie si ca repond aux exigences
    if ((!isNaN(numApts) &&Number.isInteger(numApts) && numApts >0 )&&
     (!isNaN(numFloors) &&Number.isInteger(numFloors) && numFloors >0 )&& 
     (niveau== "standard" || niveau== "premium" || niveau== "excelium" )) {
       
        switch (niveau) {
            case "standard":
                return elevatorsRequired * 8000 +  0.1 * (elevatorsRequired * 8000); //10% 
            case "premium": 
                return  elevatorsRequired * 12000 + 0.15 * ( elevatorsRequired * 12000); //15% 
            case "excelium":
                return elevatorsRequired * 15000+ 0.20 * (elevatorsRequired * 15000); //20%
          }
    
        }
        else 
        return ("Erreur ! Inserez les bonnes valeurs svp !"); //sinon on affiche un message d'erreur
    }catch(error) {
        return ("Erreur ! Inserez les bonnes valeurs svp !");//on affiche un message d'erreur
      }
    
    }};