import * as React from "react";
import { Menubar } from "radix-ui";
import { gsap } from "gsap";
import { useRef , useEffect } from "react";
import {
	CheckIcon,
	ChevronRightIcon,
	DotFilledIcon,
} from "@radix-ui/react-icons";
import "./style.css";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarDemo = () => {
    const MenuBar = useRef(null);
    
    useEffect(() => {
        gsap.from(MenuBar.current , {
            y : 0,
            opacity : 0,
            duration : 0.4,
       });
      }, []);

	const [checkedSelection, setCheckedSelection] = React.useState([
		CHECK_ITEMS[1],
	]);
	const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

	return (
		<Menubar.Root className="MenubarRoot" ref={MenuBar}>
            
			<Menubar.Menu>
            <h1 className="logo">LOGO</h1>
				<Menubar.Trigger className="MenubarTrigger">lorem</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className="MenubarContent"
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className="MenubarItem">
							lorem <div className="RightSlot">⌘ T</div>
						</Menubar.Item>
						<Menubar.Item className="MenubarItem">
                        lorem <div className="RightSlot">⌘ N</div>
						</Menubar.Item>
						<Menubar.Item className="MenubarItem" disabled>
                        lorem
						</Menubar.Item>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Sub>
							<Menubar.SubTrigger className="MenubarSubTrigger">
                            lorem
								<div className="RightSlot">
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>
							<Menubar.Portal>
								<Menubar.SubContent
									className="MenubarSubContent"
									alignOffset={-5}
								>
									<Menubar.Item className="MenubarItem">
                                    lorem
									</Menubar.Item>
									<Menubar.Item className="MenubarItem">Messages</Menubar.Item>
									<Menubar.Item className="MenubarItem">Notes</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Item className="MenubarItem">
                        lorem <div className="RightSlot">⌘ P</div>
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">lorem</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className="MenubarContent"
						align="start"
						sideOffset={5}
						alignOffset={-3}
					>
						<Menubar.Item className="MenubarItem">
                        lorem <div className="RightSlot">⌘ Z</div>
						</Menubar.Item>
						<Menubar.Item className="MenubarItem">
                        lorem <div className="RightSlot">⇧ ⌘ Z</div>
						</Menubar.Item>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Sub>
							<Menubar.SubTrigger className="MenubarSubTrigger">
                            lorem
								<div className="RightSlot">
									<ChevronRightIcon />
								</div>
							</Menubar.SubTrigger>

							<Menubar.Portal>
								<Menubar.SubContent
									className="MenubarSubContent"
									alignOffset={-5}
								>
									<Menubar.Item className="MenubarItem">
                                    lorem
									</Menubar.Item>
									<Menubar.Separator className="MenubarSeparator" />
									<Menubar.Item className="MenubarItem">Find…</Menubar.Item>
									<Menubar.Item className="MenubarItem">Find Next</Menubar.Item>
									<Menubar.Item className="MenubarItem">
                                    lorem
									</Menubar.Item>
								</Menubar.SubContent>
							</Menubar.Portal>
						</Menubar.Sub>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Item className="MenubarItem">lorem</Menubar.Item>
						<Menubar.Item className="MenubarItem">lorem</Menubar.Item>
						<Menubar.Item className="MenubarItem">lorem</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">lorem</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className="MenubarContent"
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						{CHECK_ITEMS.map((item) => (
							<Menubar.CheckboxItem
								className="MenubarCheckboxItem inset"
								key={item}
								checked={checkedSelection.includes(item)}
								onCheckedChange={() =>
									setCheckedSelection((current) =>
										current.includes(item)
											? current.filter((el) => el !== item)
											: current.concat(item),
									)
								}
							>
								<Menubar.ItemIndicator className="MenubarItemIndicator">
									<CheckIcon />
								</Menubar.ItemIndicator>
								{item}
							</Menubar.CheckboxItem>
						))}
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Item className="MenubarItem inset">
                        lorem <div className="RightSlot">⌘ R</div>
						</Menubar.Item>
						<Menubar.Item className="MenubarItem inset" disabled>
                        lorem <div className="RightSlot">⇧ ⌘ R</div>
						</Menubar.Item>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Item className="MenubarItem inset">
                        lorem
						</Menubar.Item>
						<Menubar.Separator className="MenubarSeparator" />
						<Menubar.Item className="MenubarItem inset">
                        lorem
						</Menubar.Item>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>

			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">Profiles</Menubar.Trigger>
				<Menubar.Portal>
					<Menubar.Content
						className="MenubarContent"
						align="start"
						sideOffset={5}
						alignOffset={-14}
					>
						<Menubar.RadioGroup
							value={radioSelection}
							onValueChange={setRadioSelection}
						>
							{RADIO_ITEMS.map((item) => (
								<Menubar.RadioItem
									className="MenubarRadioItem inset"
									key={item}
									value={item}
								>
									<Menubar.ItemIndicator className="MenubarItemIndicator">
										<DotFilledIcon />
									</Menubar.ItemIndicator>
									{item}
								</Menubar.RadioItem>
							))}
							<Menubar.Separator className="MenubarSeparator" />
							<Menubar.Item className="MenubarItem inset">Edit…</Menubar.Item>
							<Menubar.Separator className="MenubarSeparator" />
							<Menubar.Item className="MenubarItem inset">
                            lorem
							</Menubar.Item>
						</Menubar.RadioGroup>
					</Menubar.Content>
				</Menubar.Portal>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

export default MenubarDemo;
