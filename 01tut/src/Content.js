import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Mike', 'John', 'Dave'];
        const rnd = Math.floor(Math.random() * 3);
        setName(names[rnd]);
        return names[rnd];
    }

    const handleClick = () => {
        setCount(count+1)         
    }

    const handleClick2 = () => {
        console.log(count)
    }

    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    // }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}
            </p>
            {/* При клик (onClick) да се случи handleClick */}
            <button onClick={handleNameChange}> Change name </button>
            <button onClick={handleClick}> Enlarge count </button>
            <button onClick={handleClick2}> Check count </button>
        </main>
    )
}

export default Content