import React, { useState } from 'react'
import '../styles/main.css'

export const Main = () => {
  var [theme, setTheme] = useState('#ffffff')
  const themeColors = [
    { "name": "Primary", "value": "#0d6efd" },
    { "name": "Secondary", "value": "#6c757d" },
    { "name": "Success", "value": "#198754" },
    { "name": "Danger", "value": "#dc3545" },
    { "name": "Warning", "value": "#ffc107" },
    { "name": "Info", "value": "#0dcaf0" },
    { "name": "Light", "value": "#f8f9fa" },
    { "name": "Dark", "value": "#212529" }
  ]

  const changeTheme = (value) => {
    setTheme(value)
  }

  const applyTheme = (value) => {
    document.getElementById('body').style.backgroundColor = value
  }

  return (
    <div className='h-100 d-flex align-items-center justify-content-center'>
      <div className="card text-center">
        <div className="card-header">
          Choose your color theme
        </div>
        <div className="card-body">
          <div className='color-example' style={{ backgroundColor: theme }}>
          </div>
          <p className="card-text">Example box.</p>
          <div className='row' style={{ textAlign: 'center' }}>
            <div className='col-6'>
              <input onChange={e => changeTheme(e.target.value)} type='color' id='color-picker' className='form-control form-control-color' title='Choose your color' value={theme}></input>
            </div>
            <div className='col-6'>
              <select onChange={e => changeTheme(e.target.value)} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option value='#ffffff' defaultValue={'ffffff'}>Select default color</option>
                {
                  themeColors.map((theme, index) => {
                    return (
                      <option key={index} value={theme.value}>{theme.name}</option>
                    )
                  })
                }
              </select>
            </div>
          </div>
          <br />
          <button className='btn btn-outline-success' onClick={e => applyTheme(theme)}>Apply</button>
        </div>
        <div className="card-footer text-body-success" style={{color: theme}}>
          Theme selected: {theme} <span className='color-example-circle' style={{ backgroundColor: theme }}></span>
        </div>
      </div>
    </div>
  )
}
