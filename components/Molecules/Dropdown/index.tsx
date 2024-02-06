import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { dropdownStyles } from './index.style'

export interface DropdownProps {
	list: string[]
}

export function Dropdown({ list, ...rest }: DropdownProps) {
	const [selected, setSelected] = useState<string>(list[0])
	const [query, setQuery] = useState('')

	const filteredItem =
		query === ''
			? list
			: list.filter((person) => {
					return person.toLowerCase().includes(query.toLowerCase())
			  })

	return (
		<Combobox value={selected} onChange={setSelected} {...rest}>
			<div className={dropdownStyles.container}>
				<div className={dropdownStyles.containerMenu}>
					<Combobox.Input
						className={dropdownStyles.input}
						displayValue={(item: string) => item}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Combobox.Button className={dropdownStyles.button}>
						<ChevronDownIcon
							className="h-5 w-5 text-primary"
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery('')}
				>
					<Combobox.Options className={dropdownStyles.optionsContainer}>
						{filteredItem.length === 0 && query !== '' ? (
							<div className={dropdownStyles.noResult}>
								Nenhum selecionado.
							</div>
						) : (
							filteredItem.map((item) => (
								<Combobox.Option
									className={({ active }) =>
										`${dropdownStyles.option} ${
											active
												? 'bg-dark text-gray-primary'
												: 'text-gray-900'
										}`
									}
									key={item}
									value={item}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected
														? 'font-medium text-primary'
														: 'font-normal'
												}`}
											>
												{item}
											</span>
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	)
}
