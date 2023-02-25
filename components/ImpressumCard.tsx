
export default function ImpressumCard({content}){
    const dangerousText = { __html: content.html };
    return(
          <div className="text-slate-200 p-8 whitespace-pre-wrap ">
            <h1 className="text-3xl text-slate-100 pb-8">Impressum</h1>
            
            <div className="flex flex-col gap-4" dangerouslySetInnerHTML={dangerousText}></div>
        </div>
    )
    }
