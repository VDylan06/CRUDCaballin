using BE_CRUDCaballos.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BE_CRUDCaballos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaballoController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public CaballoController(AplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listCaballos = await _context.Caballos.ToListAsync();
                return Ok(listCaballos);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int id)
        {

            try
            {

                var caballo = await _context.Caballos.FindAsync(id);

                if (caballo == null)
                {
                    return NotFound();
                }


                return Ok(caballo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var caballo = await _context.Caballos.FindAsync(id);

                if (caballo == null)
                {
                    return NotFound();
                }

                _context.Caballos.Remove(caballo);
                await _context.SaveChangesAsync();


                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post(Caballo caballo)
        {
            try
            {

                caballo.FechaCreacion = DateTime.Now;
                _context.Add(caballo);
                await _context.SaveChangesAsync();
                return CreatedAtAction("Get", new { id = caballo.Id }, caballo);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Caballo caballo)
        {
            try
            {

                if(id != caballo.Id)
                { 
                    return BadRequest(); 
                }

                var caballoItem = await _context.Caballos.FindAsync(id);
                if (caballoItem == null)
                {
                    return NotFound();
                }


                caballoItem.Nombre = caballo.Nombre;
                caballoItem.Raza = caballo.Raza;
                caballoItem.Peso = caballo.Peso;
                caballoItem.Edad = caballo.Edad;
                caballoItem.Color = caballo.Color;

                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }





    }
}
