﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Mission_14_API.Data;

#nullable disable

namespace Mission_14_API.Migrations
{
    [DbContext(typeof(MovieContext))]
    partial class MovieContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.15");

            modelBuilder.Entity("Mission_14_API.Data.Movie", b =>
                {
                    b.Property<byte[]>("Category")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Director")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Edited")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("LentTo")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("MovieId")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Notes")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Rating")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Title")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("Year")
                        .HasColumnType("BLOB");

                    b.ToTable("Movies");
                });
#pragma warning restore 612, 618
        }
    }
}
