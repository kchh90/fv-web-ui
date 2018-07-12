/*
Copyright 2016 First People's Cultural Council

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React, { Component, PropTypes } from 'react';

import selectn from 'selectn';
import classNames from 'classnames';

/**
* Page for displaying error for the user
*/
export default class PageError extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return <div>
                <div className="row">
                    <div className={classNames('col-xs-12')}>
                        <h1>{this.props.title}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className={classNames('col-xs-12')}>
                        {this.props.body}
                    </div>
                </div>
           </div>;
  }
}