function Filter({

status,
setStatus

}){

return(

<select
value={status}
onChange={(e)=>
setStatus(e.target.value)
}
>

<option value="">
Todos
</option>

<option value="Alive">
Vivo
</option>

<option value="Dead">
Muerto
</option>

</select>

)

}

export default Filter