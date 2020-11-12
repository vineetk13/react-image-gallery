export const fetchPhoto = async (id) => {
    const imgId = id; 
    const response = await fetch(`https://api.unsplash.com/photos/${imgId}?client_id=${process.env.REACT_APP_KEY}&fit=crop&h=400`);
    const ans = await response.json();
    console.log(ans);
    return ans;
}
