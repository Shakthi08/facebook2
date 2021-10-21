import StoryCard from "./StoryCard";


const stories = [
   {
    name: "Shakthi",
    src: "https://i.im.ge/2021/10/20/oSCY68.jpg",
    profile: "https://edunext2-storage-cf.edunexttechnologies.com/1567754370628_sak_lkg.jpg",
   },
   {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
   },
   {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
   },
   {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
   },
   {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
   },
   

];


function Stories(){
    return(

        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>

    )
}

export default Stories