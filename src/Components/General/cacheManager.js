//@flow

export const saveInCache =  (key: string , data: string) =>{ 
	sessionStorage.setItem(key,data)
};

export const getFromCache =  (key: string)=> {
	try
	{
		return JSON.parse(sessionStorage.getItem(key))
	}
	catch(e){
		return null
	}
}