export const setVols = (vols)=>({ 
    type:"SetVols", payload:vols 
});
export const selectVol =(vol)=>({ 
    type:"SelectVols", payload:vol 
});
export const addService =(volId,service)=>({ 
    type:"Ajouter_Service", payload:{volId,service} 
});