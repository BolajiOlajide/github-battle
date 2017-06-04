import React from 'react';
import PropTypes from 'prop-types';

const SelectLanguage = (props) => {
	const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className='languages'>
			{languages.map((language) => {
				return (
					<li
						style={language === props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={props.onSelect.bind(null, language)}
						key={language}>
						{language}
					</li>
				)
			})}
		</ul>
	);
}


// class SelectLanguage extends React.Component {
// 	render() {
// 		const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];		
// 		return (
// 			<ul className='languages'>
// 				{languages.map((language) => {
// 					return (
// 						<li
// 							style={language === this.props.selectedLanguage ? { color: '#d0021b' } : null}
// 							onClick={this.props.onSelect.bind(null, language)}
// 							key={language}>
// 							{language}
// 						</li>
// 					)
// 				})}
// 			</ul>
// 		);
// 	}
// }

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
	constructor(props) {
		super(props); //very important line after creating a constructor
		this.state = {
				selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(language) {
			this.setState(() => {
					return {
							selectedLanguage: language
					}
			});
	}

	render() {
		return (
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage} />
			</div>
		);
	}
}

module.exports = Popular;