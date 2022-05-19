import Styles  from "./input.module.css"


export const InputBox = () => {
    return (
        <div className={Styles.inputDiv}>
            <form action="">
            <input type="text" placeholder="enter model here" />
            <input type="text" placeholder="enter make year here" />
            <input type="text" placeholder="enter operating system here" />
            <input type="text" placeholder="enter screen height here" />
            <input type="text" placeholder="enter screen width here" />
            <input type="text" placeholder="enter price here" />
            <input type="submit" value="Add" />
            </form>
          
        </div>
    )
}