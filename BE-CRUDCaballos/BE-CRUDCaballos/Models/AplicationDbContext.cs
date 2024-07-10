using Microsoft.EntityFrameworkCore;

namespace BE_CRUDCaballos.Models
{
    public class AplicationDbContext : DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }

        public DbSet<Caballo> Caballos { get; set; }
    }
}
