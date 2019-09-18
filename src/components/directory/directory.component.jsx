import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss'; 
// Need state so need to be class
//since pulling in from redux state change from class to functional component
// class Directory extends React.Component {}
const Directory = ({sections}) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />))}
    </div>
);

const mapStateToProps = createStructuredSelector({ 
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
