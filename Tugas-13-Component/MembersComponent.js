export const MembersComponent = {
    template: `
    <table border="1">
        <tr>
            <td>
                <img width=100 :src="member.photo_profile ? photoDomain + member.photo_profile : 'https://dummyimage.com/16:9x1080'" alt="">
            </td>
            <td>
                <b>Name : </b> {{ member.name }} 
                <br>
                <b>Address : </b> {{ member.address }} 
                <br>
                <b>No_hp : </b> {{ member.no_hp }} 
                <br>
            </td>
            <td>
                <button @click="$emit('edit' , member)">Edit</button>
                <button @click="$emit('delete' , member.id)">Hapus</button>
                <button @click="$emit('upload' , member)">Upload Foto</button>
            </td>
        </tr>
    </table>
    `,

    data(){
        return{}
    },
    props: ['member']
}





