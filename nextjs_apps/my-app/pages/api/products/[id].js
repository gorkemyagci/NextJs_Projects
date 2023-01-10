import _data from "../../_data"

export default function handler({query: {id}}, res) {
    const filtered = _data.filter(prd => prd.id == id);
    if(filtered.length>0){
        res.status(200).json(filtered);
    }else{
        res.status(400).json({message:"Product not found"});
    }
  }