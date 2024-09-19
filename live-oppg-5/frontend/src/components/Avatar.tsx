type AvatarProps = {
    name: string;
}

export default function Avatar(data: AvatarProps){

    const { name } = data;
    // ta i mot navn fra student, bruke kun 
    
    const getFirstLetter = name.split(" ").join(" ").toUpperCase().slice(0,1); //Fjerne mellomrom, 

    // const getStudentAvatar = () => {
    //     StudentProps.name
    //     console.log(getStudentAvatar())
    // }

    return (
        <>
             <p className='avatar'> {getFirstLetter}</p>
        </>
       
    )
}